import { navigate } from 'gatsby'; //import navigate from gatsby
import i18n from "../config/i18n"
import { localizedSlug } from "../utils/i18n-helpers"

const LocalizedNavigate = (path, lang) => {
    const isDefault = (lang === i18n.defaultLang)
    const slug = path
    navigate(localizedSlug({isDefault, lang, slug}))
}

export default LocalizedNavigate;