import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {theme} from "themes";
import {ThemeProvider} from "styled-components";
import {appWithTranslation} from "next-i18next";


function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>)
}

export default appWithTranslation(MyApp)
