import * as React from "react"
import Layout from "../components/layout"
import YoutubeEmbed from "../components/youtube"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <YoutubeEmbed embedId="QqpkrdnB6Ss" />
      </main>
    </Layout>
  )
}


export default IndexPage
