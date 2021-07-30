import { navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import YoutubeEmbed from "../components/youtube"
import { content } from "../config/index-content"



const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>CryptoDappy</h1>
        <h3 style={{ marginTop: 0 }}>Learn blockchain development by building a collectibles game</h3>
        <YoutubeEmbed embedId="QqpkrdnB6Ss" />
        <h2>Content</h2>
        {content.map(c => (
          <>
            <h3><a onClick={() => navigate(c.href)}>{c.title}</a></h3>
            <p>{c.text}</p>
          </>
        ))
        }
      </main>
    </Layout>
  )
}


export default IndexPage
