import React from 'react'
import { Language } from '../ts/interfaces/global_interfaces'

const Footer = ({theme, texts}: {theme: string, texts: Language}): JSX.Element => {
    const {footerTitle} = texts;
  return (
    <footer className={theme}>
            <p>{footerTitle}</p>
    </footer>
  )
}

export default Footer