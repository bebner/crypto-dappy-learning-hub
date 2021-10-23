import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import YoutubeEmbed from "../components/youtube"
import { content } from "../config/index-content"
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
  const {navigate} = useI18next();
  return (
    <Layout>
      <main>
        <h1>
          <Trans>Learn blockchain with CryptoDappy</Trans>
        </h1>
        <p>
          <Trans i18nKey="index_p1">
            CryptoDappy is a <strong>mission-based online course</strong> directed at developers who want to get started learning
            blockchain development.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="index_p2">
            CryptoDappy is not an official Flow project, it's a personal project built by Flow's Technical Content Marketing Manager
            Benjamin Ebner (<a href="https://twitter.com/_bebner">Twitter</a>
            /<a href="https://medium.com/@ebner.benjamin">Medium</a>
            /<a href="https://www.youtube.com/channel/UCe5STCXbw9lm5HDad_yh9Ag">Youtube</a>). The official Flow reference dApp is
            <a href="https://github.com/onflow/kitty-items"> Kitty-Items</a>.
          </Trans>
        </p>
        <p><Trans i18nKey="index_p3">Find out more by visiting <a>👉 What's CryptoDappy?</a></Trans></p>
        <YoutubeEmbed embedId="CW1625hF3CY" />

        {content.map(c => (
          <>
            <h3 style={{ cursor: "pointer" }}><a onClick={() => navigate(c.href)}><Trans>{c.title}</Trans></a></h3>
            <p><Trans>{c.text}</Trans></p>
          </>
        ))
        }

      </main>
    </Layout>
  )
}


export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;