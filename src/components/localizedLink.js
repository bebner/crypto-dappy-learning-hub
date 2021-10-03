import React from "react"
import { Link } from "gatsby"
import { LocaleContext } from "./layout"
import i18n from "../config/i18n"
import { localizedSlug } from "../utils/i18n-helpers"

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)

const localizedPath = (path, lang) => {
  const isDefault = (lang === i18n.defaultLang)
  const slug = path
  return localizedSlug({ isDefault, lang, slug})
}

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, href, ...props }) => {
  const path = to || href
  const { lang } = React.useContext(LocaleContext)

  return (isHash(path) || !isInternal(path)) ? (
    <a {...props} href={path} rel="noopener noreferrer" />
   ) : (
    <Link {...props} to={localizedPath(path, lang)} />
   )
}

export default LocalizedLink