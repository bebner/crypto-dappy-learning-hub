import React from 'react'
import styled from 'styled-components'
import { LocaleContext } from "./layout"
import { config } from '../config/config'
import useTranslations from "./useTranslations"
import LocalizedNavigate from './localizedNavigate'

export default function Header() {
  const { locale } = React.useContext(LocaleContext)
  const { beta, feedback } = useTranslations()

  return (
    <Wrapper>
      <HeroImage
        onClick={() => LocalizedNavigate('/', locale)}
        src={`${config.ASSETS_URL}/images/Dappy1.png`} />
      <Content onClick={() => LocalizedNavigate('/', locale)}>
        <Title><Highlight>Crypto</Highlight>Dappy</Title>
        <SubTitle>The modern way to <Highlight>learn blockchain</Highlight></SubTitle>
      </Content>
      <Tag>
        <h3 style={{ margin: 0 }}>{beta}</h3>
        <CTA href="https://forum.onflow.org/t/community-feedback-for-cryptodappy-beta">
          <span style={{ marginRight: ".3rem" }}>👉</span>{feedback}
        </CTA>
      </Tag>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const HeroImage = styled.img`
  width: 5rem;
  cursor: pointer;
`

const Content = styled.div`
  margin-left: .5rem;
  cursor: pointer;
  flex: 1;
`

const Title = styled.h1`
  margin: 0;
  margin-top: .5rem;
  line-height: 1;
  word-break: break-word;
`

const SubTitle = styled.p`
  font-family: Monument Light;
  margin: 0;
`

const Highlight = styled.span`
  color: yellow;
  word-break: break-all;
`

const Tag = styled.div`
  text-align: right;
`

const CTA = styled.a`
  font-size: .75rem;
  cursor: pointer;
  display: block;
`