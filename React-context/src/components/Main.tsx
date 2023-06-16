import React from 'react'
import { Language } from '../ts/interfaces/global_interfaces'

const Main = ({theme, texts, auth}: {theme: string, texts: Language, auth: boolean}): JSX.Element => {
    const {mainWelcome, mainHello, mainContent} = texts;
  return (
    <main className={theme}>
        {auth?<p>{mainHello}</p>:<p>{mainContent}</p>}
        <p>{mainWelcome}</p>
    </main>
  )
}

export default Main