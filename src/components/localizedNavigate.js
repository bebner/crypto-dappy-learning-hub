import { navigate } from 'gatsby'; //import navigate from gatsby
import i18n from "../config/i18n"

const LocalizedNavigate = (path, locale) => {
    const localizedPath = (locale === i18n.defaultLang || path.indexOf('//') !== -1)
    ? path
    : `/${i18n.langs[locale].path}${path}`
    navigate(localizedPath)
  }

export default LocalizedNavigate;