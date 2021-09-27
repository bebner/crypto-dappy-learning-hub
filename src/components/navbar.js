import { Link, navigate } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { config } from '../config/config'
import Button from './button'
import LocalizedLink from "../components/localizedLink"

export default function Navbar({ menuLinks }) {
  const [shown, setShown] = useState(false)

  return (
    <>
      <Wrapper>
        <Button onClick={() => navigate('/contribute')}>Contribute</Button>
        <LangMenu>
          <Link to="/" hrefLang="en">
            English
          </Link>
          {` `}/{` `}
          <Link to="/ja" hrefLang="ja">
            Japanese
          </Link>
        </LangMenu>
        {menuLinks.map((m, i) => (
          <NavLink>
            <Dappy src={`${config.ASSETS_URL}/images/Dappy${i + 1}.png`} />
            <LocalizedLink  to={m.link}>{m.name}</LocalizedLink >
          </NavLink>
        ))
        }
        <SmallLink onClick={() => navigate('/imprint')}>Imprint</SmallLink>
        <SmallLink onClick={() => navigate('/privacy')}>Privacy Policy</SmallLink>
      </Wrapper>
      <MobileWrapper>
        <MenuTrigger onClick={() => setShown(prev => !prev)}>Menu {shown ? <>&#10514;</> : <>&#10515;</>}</MenuTrigger>
        {shown &&
          <MobileMenu>
            <Button onClick={() => navigate('/contribute')}>Contribute</Button>
            {
              menuLinks.map((m, i) => (
                <NavLink>
                  <Dappy src={`${config.ASSETS_URL}/images/Dappy${i + 1}.png`} />
                  <LocalizedLink to={m.link}>{m.name}</LocalizedLink>
                </NavLink>
              ))
            }
          </MobileMenu>
        }
      </MobileWrapper>
    </>
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

const LangMenu = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
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