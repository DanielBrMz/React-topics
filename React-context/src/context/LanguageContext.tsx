import React, {useState, createContext} from 'react'
import { ILanguageContext, Language, TranslatableLanguages } from '../ts/interfaces/global_interfaces';

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

const initalLanguage: string = "es";
const translations: TranslatableLanguages = {
    es: {
        headerTitle: 'Mi aplicación con Context API',
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
        headerTitle: 'My application with Context API',
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

const LanguageProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [language, setLanguage] = useState<string>(initalLanguage);
    const [texts, setTexts] = useState<Language>(translations[language]);

    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage(e.target.value);
        setTexts(translations[e.target.value]);
    }

    const data = {language, handleLanguage, texts};

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export {LanguageProvider};
export default LanguageContext;