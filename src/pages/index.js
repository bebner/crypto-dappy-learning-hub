import { navigate } from "gatsby"
import * as React from "react"
import YoutubeEmbed from "../components/youtube"
import { content } from "../config/index-content"
import useTranslations from "../components/useTranslations"


const IndexPage = () => {
  const { hello } = useTranslations()
  return (
    <main>
      <h1>{hello}</h1>
      <p>
        CryptoDappy is a <strong>mission-based online course</strong> directed at developers who want to get started learning
        blockchain development.
      </p>
      <p>
        CryptoDappy is not an official Flow project, it's a personal project built by Flow's Technical Content Marketing Manager
        Benjamin Ebner (<a href="https://twitter.com/_bebner">Twitter</a>
        /<a href="https://medium.com/@ebner.benjamin">Medium</a>
        /<a href="https://www.youtube.com/channel/UCe5STCXbw9lm5HDad_yh9Ag">Youtube</a>). The official Flow reference dApp is
        <a href="https://github.com/onflow/kitty-items"> Kitty-Items</a>.
      </p>
      <p>Find out more by visiting <a>👉 What's CryptoDappy?</a></p>
      <YoutubeEmbed embedId="CW1625hF3CY" />

      {content.map(c => (
        <>
          <h3 style={{ cursor: "pointer" }}><a onClick={() => navigate(c.href)}>{c.title}</a></h3>
          <p>{c.text}</p>
        </>
      ))
      }

    </main>
  )
}


export default IndexPage
