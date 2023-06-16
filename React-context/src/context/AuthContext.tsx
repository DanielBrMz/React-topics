import React, {useState, createContext} from 'react'
import { IAuthContext } from '../ts/interfaces/global_interfaces';

const AuthContext = createContext({} as IAuthContext);

const initalAuth: boolean = false;

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState<boolean>(initalAuth)

    const handleAuth = (): void => {
        setAuth(!auth);
    }

    const data: IAuthContext = {auth, handleAuth}

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider}
export default AuthContext;
