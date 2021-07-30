import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'; //import navigate from gatsby
import { config } from '../config/config'

export default function header() {
  return (
    <Wrapper>
      <HeroImage
        onClick={() => navigate('/')}
        src={`${config.ASSETS_URL}/images/Dappy1.png`} />
      <Content onClick={() => navigate('/')}>
        <Title><Highlight>Crypto</Highlight>Dappy</Title>
        <SubTitle>The modern way to <Highlight>learn blockchain</Highlight></SubTitle>
      </Content>
      <AffiliateLogo
        onClick={() => navigate('https://onflow.org')}
        src={`${config.ASSETS_URL}/images/PoweredByFlow_Horizontal.png`} />
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
`

const SubTitle = styled.p`
  font-family: Monument Light;
  margin: 0;
`

const Highlight = styled.span`
  color: yellow;
`

const AffiliateLogo = styled.img`
  width: 17rem;
  cursor: pointer;
`
