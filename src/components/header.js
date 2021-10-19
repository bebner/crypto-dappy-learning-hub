import React from 'react'
import styled from 'styled-components'
import { config } from '../config/config'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

export default function Header() {
  const {navigate} = useI18next();
  return (
    <Wrapper>
      <HeroImage
        onClick={() => navigate('/')}
        src={`${config.ASSETS_URL}/images/Dappy1.png`} />
      <Content onClick={() => navigate('/')}>
        <Title><Highlight>Crypto</Highlight>Dappy</Title>
        <SubTitle><Trans i18nKey="subtitle">The modern way to <Highlight>learn blockchain</Highlight></Trans></SubTitle>
      </Content>
      <Tag>
        <h3 style={{ margin: 0 }}><Trans>Beta</Trans></h3>
        <CTA href="https://forum.onflow.org/t/community-feedback-for-cryptodappy-beta">
          <span style={{ marginRight: ".3rem" }}>👉</span><Trans>Leave Feedback</Trans>
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