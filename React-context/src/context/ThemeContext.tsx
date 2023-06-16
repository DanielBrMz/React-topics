import React, {useState, createContext } from "react";
import { IThemeContext } from "../ts/interfaces/global_interfaces";


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const initialTheme: string = "light";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<string>(initialTheme);

    const handleTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(e.target.id === 'light-context') setTheme('light');
        else setTheme('dark');
    }

    const data = {theme, handleTheme}

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeProvider};
export default ThemeContext;