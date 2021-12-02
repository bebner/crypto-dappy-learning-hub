import React, { useState } from 'react'
import styled from 'styled-components'
import { config } from '../config/config'
import Button from './button'
import { Trans, Link as LocalLink, useI18next } from 'gatsby-plugin-react-i18next';
import LangSelect from './langSelect'

export default function Navbar({ menuLinks }) {
  const [shown, setShown] = useState(false)
  const {navigate} = useI18next();

  return (
    <>
      <Wrapper>
        <Button onClick={() => navigate('/contribute')}><Trans>Contribute</Trans></Button>
        <LangSelect />
        {menuLinks.map((m, i) => (
          <NavLink>
            <Dappy src={`${config.ASSETS_URL}/images/Dappy${i + 1}.png`} />
            <Link to={m.link}><Trans>{m.name}</Trans></Link>
          </NavLink>
        ))
        }
        <SmallLink onClick={() => navigate('/imprint')}>Imprint</SmallLink>
        <SmallLink onClick={() => navigate('/privacy')}>Privacy Policy</SmallLink>
      </Wrapper>
      <MobileWrapper>
        <MenuTrigger onClick={() => setShown(prev => !prev)}><Trans>Menu</Trans> {shown ? <>&#10514;</> : <>&#10515;</>}</MenuTrigger>
        {shown &&
          <MobileMenu>
            <LangSelect />
            <Button onClick={() => navigate('/contribute')}><Trans>Contribute</Trans></Button>
            {
              menuLinks.map((m, i) => (
                <NavLink>
                  <Dappy src={`${config.ASSETS_URL}/images/Dappy${i + 1}.png`} />
                  <Link to={m.link}><Trans>{m.name}</Trans></Link>
                </NavLink>
              ))
            }
          </MobileMenu>
        }
      </MobileWrapper>
    </>
  )
}

const Link = ({ to, ...props }) => {
  const isHash = /^#/.test(to)
  const isInternal = /^\/(?!\/)/.test(to)

  return (isHash || !isInternal) ? (
    <a {...props} href={to} rel="noopener noreferrer" />
   ) : (
    <LocalLink to={to} {...props} />
   )
}

const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 15rem;

  @media(max-width: 700px) {
    display: none;
  }
`
const MobileWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  
  @media(min-width: 700px) {
    display: none;
  }
`

const NavLink = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`

const Dappy = styled.img`
  width: 2rem;
  margin-right: .5rem;
`

const MenuTrigger = styled.div`
  font-family: Monument Bold;
  cursor: pointer;
  margin-bottom: 1rem;
`

const MobileMenu = styled.div`
  background: rgba(0,0,0,.2);
  padding: 1rem;
`

const SmallLink = styled.a`
  font-size: .75rem;
  border: none;
  cursor: pointer;
`