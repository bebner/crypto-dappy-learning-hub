import React from 'react'
import Select from 'react-select';
import { useI18next } from 'gatsby-plugin-react-i18next';
import ReactCountryFlag from "react-country-flag"
import i18n from "../config/i18n"

export default function LangSelect() {
    const {language, languages, changeLanguage} = useI18next();
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
    const options = languages.map(lang => {
        const langs = i18n.langs
        return {
            value: lang,
            label: <><ReactCountryFlag countryCode={langs[lang].countryCode} svg style={flagStyle} /> {langs[lang].name}</>
        }
    })
    const defaultIdx = options.findIndex(e => e.value === language)

    return (
        <Select
            placeholder='language'
            defaultValue={options[defaultIdx]}
            onChange={(option) => changeLanguage(option.value)}
            options={options}
            styles={langMenuStyles}
        />
    )
}