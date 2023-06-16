import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import AuthContext from '../context/AuthContext';

const HeaderContext = (): JSX.Element => {
  const {handleLanguage, texts} = useContext(LanguageContext);
  const {theme, handleTheme} = useContext(ThemeContext);
  const {auth, handleAuth} = useContext(AuthContext);
  const {headerTitle, headerSubtitle, headerLight, headerDark, buttonLogin, buttonLogout} = texts;

  return (
    <header className={theme}>
            <h2>{headerTitle}</h2>
            <h3>{headerSubtitle}</h3>
            <select name="language" id="" onChange={handleLanguage}>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
            </select>
            <input type="radio" name='theme' id='light-context' onChange={handleTheme}/>
            <label htmlFor="light-context">{headerLight}</label>
            <input type="radio" name='theme' id='dark-context' onChange={handleTheme}/>
            <label htmlFor="dark-context">{headerDark}</label>
            <button onClick={handleAuth}>{auth ? buttonLogout : buttonLogin}</button>
    </header>
  )
}

export default HeaderContext;