const isIndex = str => str === `/`

// Use a little helper function to remove trailing slashes from paths
exports.removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``)

exports.localizedSlug = ({ isDefault, lang, slug }) =>
  isDefault ? `${slug}` : `/${lang}${isIndex(slug) ? `` : `${slug}`}`