import React from "react"
import { Link } from "gatsby"
import { LocaleContext } from "./layout"
import i18n from "../config/i18n"

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)
const isIndex = str => str === `/`
const localizedPath = (path, locale) => {
  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash
  return locale === i18n.defaultLang
  ? path
  : `/${i18n.langs[locale].path}${isIndex(path) ? `` : `${path}`}`
}

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, href, ...props }) => {
  const path = to || href
  const { locale } = React.useContext(LocaleContext)

  return (isHash(path) || !isInternal(path)) ? (
    <a {...props} href={path} rel="noopener noreferrer" />
   ) : (
    <Link {...props} to={localizedPath(path, locale)} />
   )
}

export default LocalizedLink