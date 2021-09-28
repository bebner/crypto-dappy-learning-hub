import { navigate } from 'gatsby'; //import navigate from gatsby
import locales from "../config/i18n"

const LocalizedNavigate = (path, locale) => {
    const localizedPath = ((locale in locales && locales[locale].default) || path.indexOf('//') !== -1)
    ? path
    : `/${locales[locale].path}${path}`
    navigate(localizedPath)
  }

export default LocalizedNavigate;