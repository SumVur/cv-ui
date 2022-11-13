import type {AppProps} from 'next/app'
import {theme} from "themes";
import {ThemeProvider} from "styled-components";
import {appWithTranslation} from "next-i18next";
import './styles.scss'
import {MainLayout} from "@layout";
import {Cardo} from '@next/font/google'

const cardo = Cardo({weight: "400"})

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${cardo.style.fontFamily};
              }
            `}</style>

            <ThemeProvider theme={theme}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default appWithTranslation(MyApp)
