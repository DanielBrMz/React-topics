import React from 'react'
import { Language } from '../ts/interfaces/global_interfaces';

const Header = ({theme, handleTheme, texts, handleLanguage, auth, handleAuth}: {theme: string, handleTheme: (e: React.ChangeEvent<HTMLInputElement>)=>void, texts: Language, handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>)=>void, auth: boolean, handleAuth: ()=>void}): JSX.Element => {
    
    const {headerTitle, headerSubtitle, headerLight, headerDark, buttonLogin, buttonLogout} = texts;
  return (
    <header className={theme}>
            <h2>{headerTitle}</h2>
            <h3>{headerSubtitle}</h3>
            <select name="language" id="" onChange={handleLanguage}>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
            </select>
            <input type="radio" name='theme' id='light' onChange={handleTheme}/>
            <label htmlFor="light">{headerLight}</label>
            <input type="radio" name='theme' id='dark' onChange={handleTheme}/>
            <label htmlFor="dark">{headerDark}</label>
            <button onClick={handleAuth}>{auth ? buttonLogout : buttonLogin}</button>
    </header>
  )
}

export default Header