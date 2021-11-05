import { navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import YoutubeEmbed from "../components/youtube"
import { content } from "../config/index-content"
import { marketContent } from "../config/index-market-content"



const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Learn blockchain with CryptoDappy</h1>
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
        <hr/>
      <h2>Market Missions</h2>
      {marketContent.map(c => (
          <>
            <h3 style={{ cursor: "pointer" }}><a onClick={() => navigate(c.href)}>{c.title}</a></h3>
            <p>{c.text}</p>
          </>
        ))
        }
      </main>
    </Layout>
  )
}


export default IndexPage
