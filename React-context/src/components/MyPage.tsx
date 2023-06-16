import React, {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Language, TranslatableLanguages } from '../ts/interfaces/global_interfaces';

const initialTheme: string = "light";
const initalLanguage: string = "es";
const initalAuth: boolean = false;
const translations: TranslatableLanguages = {
    es: {
        headerTitle: 'Mi aplicación sin Context API',
        headerSubtitle: 'Mi cabecera',
        headerLight: 'Claro',
        headerDark: 'Oscuro',
        buttonLogin: 'Iniciar Sesión',
        buttonLogout: 'Cerrar Sesión',
        mainWelcome: 'Bienvenid@ invitad@',
        mainHello: 'Bienvenid@ usuari@',
        mainContent: 'Mi contenido principal',
        footerTitle: 'Mi pie de página'
    },
    en: {
        headerTitle: 'My application without Context API',
        headerSubtitle: 'My header',
        headerLight: 'Light',
        headerDark: 'Dark',
        buttonLogin: 'Login',
        buttonLogout: 'Logout',
        mainWelcome: 'Welcome guest',
        mainHello: 'Welcome user',
        mainContent: 'My main content',
        footerTitle: 'My footer'
    }
};

const MyPage = (): JSX.Element => {
    const [theme, setTheme] = useState<string>(initialTheme);
    const [language, setLanguage] = useState<string>(initalLanguage);
    const [texts, setTexts] = useState<Language>(translations[language]);
    const [auth, setAuth] = useState<boolean>(initalAuth)

    const handleTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(e.target.id === 'light') setTheme('light');
        else setTheme('dark');
    }

    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage(e.target.value);
        setTexts(translations[e.target.value]);
    }

    const handleAuth = (): void => {
        setAuth(!auth);
    }

  return (
    <div className='my-page'>
        <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth}/>
        <Main theme={theme} texts={texts} auth={auth}/>
        <Footer theme={theme} texts={texts}/>    
    </div>
  )
}

export default MyPage