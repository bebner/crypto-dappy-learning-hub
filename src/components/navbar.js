import { Link, navigate } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { config } from '../config/config'
import locales from "../config/i18n"
import Button from './button'
import { LocaleContext } from "./layout"
import useTranslations from "./useTranslations"
import LocalizedLink from './localizedLink'
import Select from 'react-select';
import ReactCountryFlag from "react-country-flag"

export default function Navbar({ menuLinks }) {
  const [shown, setShown] = useState(false)
  const { contribute } = useTranslations()
  const { locale } = React.useContext(LocaleContext)

  const langMenuStyles = {
    container: (provided, state) => ({
      ...provided,
      marginBottom: '1rem',
      alignItems: 'center',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
  }
  const options = [
    { value: 'en', path: '/', label: <><ReactCountryFlag countryCode="GB" svg style={{width: '1.5rem', height: '1.5rem', verticalAlign: 'bottom'}} /> English</> },
    { value: 'ja', path: '/ja', label: <><ReactCountryFlag countryCode="JP" svg style={{width: '1.5rem', height: '1.5rem', verticalAlign: 'bottom'}} /> 日本語</> },
  ];
  const defaultIdx = options.findIndex(e => e.value === locale) || 0

  return (
    <>
      <Wrapper>
        <Button onClick={() => localizedNavigate('/contribute', locale)}>{contribute}</Button>
        <Select
          placeholder='language'
          defaultValue={options[defaultIdx]}
          onChange={(option) => navigate(`${option.path}`)}
          options={options}
          styles={langMenuStyles}
        />
        {menuLinks.map((m, i) => (
          <NavLink key={i.toString()}>
            <Dappy src={`${config.ASSETS_URL}/images/Dappy${i + 1}.png`} />
            <LocalizedLink to={m.link}>{m.name}</LocalizedLink >
          </NavLink>
        ))
        }
        <SmallLink onClick={() => localizedNavigate('/imprint', locale)}>Imprint</SmallLink>
        <SmallLink onClick={() => localizedNavigate('/privacy', locale)}>Privacy Policy</SmallLink>
      </Wrapper>
      <MobileWrapper>
        <MenuTrigger onClick={() => setShown(prev => !prev)}>Menu {shown ? <>&#10514;</> : <>&#10515;</>}</MenuTrigger>
        {shown &&
          <MobileMenu>
            <Button onClick={() => localizedNavigate('/contribute', locale)}>Contribute</Button>
            <Select
              placeholder='language'
              defaultValue={options[defaultIdx]}
              onChange={(option) => navigate(`${option.path}`)}
              options={options}
              styles={langMenuStyles}
            />
            {
              menuLinks.map((m, i) => (
                <NavLink key={i.toString()}>
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

const localizedNavigate = (path, locale) => {
  const localizedPath = (locales[locale].default || path.indexOf('//') !== -1)
  ? path
  : `/${locales[locale].path}${path}`
  navigate(localizedPath)
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