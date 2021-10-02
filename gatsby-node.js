const path = require(`path`)
const i18n = require(`./src/config/i18n`)
const {
  localizedSlug,
  removeTrailingSlash,
} = require(`./src/utils/gatsby-node-helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const langs = i18n.langs

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  Object.keys(langs).map(lang => {
    // Use the values defined in "langs" to construct the path
    const localizedPath = (lang === i18n.defaultLang)
      ? page.path
      : `${langs[lang].path}${page.path}`

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        dateFormat: langs[lang].dateFormat,
      },
    })
  })
}

// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.mdx`)

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = (name.split(`.`).length === 1)

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? i18n.defaultLang : name.split(`.`)[1]

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            isDefault
            locale
          }
          frontmatter {
            path
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }

  const pages = result.data.allMdx.nodes;

  pages.forEach((page) => {
    const slug = page.frontmatter.path
    const locale = page.fields.locale
    const isDefault = page.fields.isDefault

    actions.createPage({
      path: localizedSlug({ isDefault, locale, slug }),
      component: require.resolve('./src/templates/mission.js'),
      context: {
        locale: locale,
        pathSlug: slug,
      },
    });
  });
};