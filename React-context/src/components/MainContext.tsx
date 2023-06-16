import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import AuthContext from '../context/AuthContext';

const MainContext = (): JSX.Element => {
  const {texts} = useContext(LanguageContext); 
  const {theme} = useContext(ThemeContext);
  const {auth} = useContext(AuthContext);
  const {mainWelcome, mainHello, mainContent} = texts;

  return (
    <main className={theme}>
        {auth?<p>{mainHello}</p>:<p>{mainContent}</p>}
        <p>{mainWelcome}</p>
    </main>
  )
}

export default MainContext;