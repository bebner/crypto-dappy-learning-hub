import React from 'react'
import { navigate } from 'gatsby-link';
import Select from 'react-select';
import ReactCountryFlag from "react-country-flag"
import i18n from "../config/i18n"

export default function LangSelect({ locale }) {
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
    const flagStyle = {
        width: '1.5rem',
        height: '1.5rem',
        verticalAlign: 'bottom'
    }
    const options = Object.keys(i18n.langs).map(lang => {
        const langs = i18n.langs
        const path = (lang === i18n.defaultLang) ? '/' : `/${langs[lang].path}`
        return {
            value: lang,
            path: path,
            label: <><ReactCountryFlag countryCode={langs[lang].countryCode} svg style={flagStyle} /> {langs[lang].name}</>
        }
    })
    const defaultIdx = options.findIndex(e => e.value === locale)

    return (
        <Select
            placeholder='language'
            defaultValue={options[defaultIdx]}
            onChange={(option) => navigate(`${option.path}`)}
            options={options}
            styles={langMenuStyles}
        />
    )
}