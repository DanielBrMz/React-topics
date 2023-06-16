import React from 'react'
import { Language } from '../ts/interfaces/global_interfaces'
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';

const FooterContext = (): JSX.Element => {
  const {texts} = React.useContext(LanguageContext);
  const {theme} = React.useContext(ThemeContext);
  const {footerTitle} = texts;

  return (
    <footer className={theme}>
            <p>{footerTitle}</p>
    </footer>
  )
}

export default FooterContext;