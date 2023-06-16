import { Text } from "../types/global_types";

export interface Language {
    headerTitle: string;
    headerSubtitle: string;
    headerLight: string;
    headerDark: string;
    buttonLogin: string;
    buttonLogout: string;
    mainWelcome: string;
    mainHello: string;
    mainContent: string;
    footerTitle: string;

}

export interface TranslatableLanguages {
    [key: string]: Language;
}

export interface IThemeContext {
    theme: string;
    handleTheme:(e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ILanguageContext {
    language: string;
    texts: Language;
    handleLanguage:(e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface IAuthContext {
    auth: boolean;
    handleAuth: () => void;
}

export interface SoccerPlayers{
    id: number;
    name: string;
    position: string;
    team: string;
}

export interface ICrudContext {
    db: SoccerPlayers[] | null;
    dataToEdit: SoccerPlayers | null;
    error: any;
    loading: boolean;
    text: Text;
    createData: (player: SoccerPlayers) => void;
    deleteData: (id: number) => void;
    updateData: (player: SoccerPlayers) => void;
    setDataToEdit: (player: SoccerPlayers | null) => void;

}