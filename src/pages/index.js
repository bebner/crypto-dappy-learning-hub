import * as React from "react"
import YoutubeEmbed from "../components/youtube"
import useTranslations from "../components/useTranslations"
import LocalizedLink from '../components/localizedLink'
import parse from 'html-react-parser';

const IndexPage = () => {
  const {
    index_title, index_p1, index_p2, index_p3,
    onboarding_title, onboarding_text,
    mission1_title, mission1_text,
    mission2_title, mission2_text,
    mission3_title, mission3_text,
    mission4_title, mission4_text,
    mission5_title, mission5_text,
    mission6_title, mission6_text
  } = useTranslations()

  const content = [
    { title: `${onboarding_title}`, text: `${onboarding_text}`, href: "/missions/mission-0" },
    { title: `${mission1_title}`, text: `${mission1_text}`, href: "/missions/mission-1" },
    { title: `${mission2_title}`, text: `${mission2_text}`, href: "/missions/mission-2" },
    { title: `${mission3_title}`, text: `${mission3_text}`, href: "/missions/mission-3" },
    { title: `${mission4_title}`, text: `${mission4_text}`, href: "/missions/mission-4" },
    { title: `${mission5_title}`, text: `${mission5_text}`, href: "/missions/mission-5" },
    { title: `${mission6_title}`, text: `${mission6_text}`, href: "/missions/mission-6" }
  ]
  return (
    <main>
      <h1>{index_title}</h1>
      <p>{parse(index_p1)}</p>
      <p>{parse(index_p2)}</p>
      <p>{parse(index_p3)}</p>
      <YoutubeEmbed embedId="CW1625hF3CY" />

      {content.map((c, i) => (
        <span key={i.toString()}>
          <h3 style={{ cursor: "pointer" }}><LocalizedLink to={c.href}>{c.title}</LocalizedLink></h3>
          <p>{c.text}</p>
        </span>
      ))
      }

    </main>
  )
}


export default IndexPage
