const path = require(`path`)
const i18n = require(`./src/config/i18n`)
const {
  localizedSlug,
  removeTrailingSlash,
} = require(`./src/utils/i18n-helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const langs = i18n.langs

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  Object.keys(langs).map(lang => {
    const isDefault = (lang === i18n.defaultLang)
    const slug = page.path
    // Use the values defined in "langs" to construct the path
    const localizedPath = localizedSlug({ isDefault, lang, slug})

    return createPage({
      // Pass on everything from the original page
      ...page,
      path: localizedPath,
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        lang: lang
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
    // name is defined with "pagename.lang" or "pagename" (defualt lang)
    const name = path.basename(node.fileAbsolutePath, `.mdx`)

    // check if the mdx file is default language
    const isDefault = (name.split(`.`).length === 1)

    // If it's the default language, pass the defaultLang for that
    const lang = isDefault ? i18n.defaultLang : name.split(`.`).pop()

    createNodeField({ node, name: `lang`, value: lang })
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
            lang
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
    const isDefault = page.fields.isDefault
    const slug = page.frontmatter.path
    const lang = page.fields.lang

    actions.createPage({
      path: localizedSlug({ isDefault, lang, slug }),
      component: require.resolve('./src/templates/mission.js'),
      context: {
        lang: lang,
        pathSlug: slug,
      },
    });
  });
};