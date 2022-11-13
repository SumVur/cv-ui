import type {AppProps} from 'next/app'
import {theme} from "themes";
import {ThemeProvider} from "styled-components";
import {appWithTranslation} from "next-i18next";
import './styles.css'
import {MainLayout} from "@layout";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default appWithTranslation(MyApp)
