import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext)
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]

  return translations
}

export default useTranslations

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            title
            subtitle
            beta
            feedback
            contribute
            index_title
            index_p1
            index_p2
            index_p3
            onboarding_title
            onboarding_text
            mission1_title
            mission1_text
            mission2_title
            mission2_text
            mission3_title
            mission3_text
            mission4_title
            mission4_text
            mission5_title
            mission5_text
            mission6_title
            mission6_text
          }
        }
      }
    }
  }
`