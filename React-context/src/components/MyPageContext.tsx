import React from 'react'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import {ThemeProvider} from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';

const MyPage = (): JSX.Element => {
  return (
    <div className='my-page'>
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <HeaderContext/>
                    <MainContext/>  
                    <FooterContext/> 
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>   
    </div>
  )
}

export default MyPage;