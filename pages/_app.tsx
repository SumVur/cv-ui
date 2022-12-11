import type {AppProps} from 'next/app'
import {theme} from "themes";
import {ThemeProvider} from "styled-components";
import {appWithTranslation} from "next-i18next";
import {ApolloProvider} from "@apollo/client";
import {Cardo} from '@next/font/google'
import './styles.scss'
import {MainLayout} from "@layout";
import client, {createFetcher} from "@helpers";
import {SWRConfig} from 'swr';

const cardo = Cardo({weight: "400", subsets: ["latin"]})

function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${cardo.style.fontFamily};
              }
            `}</style>
            <ThemeProvider theme={theme}>
                <SWRConfig value={{fetcher: createFetcher()}}>
                    <ApolloProvider client={client}>
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    </ApolloProvider>
                </SWRConfig>
            </ThemeProvider>
        </>
    )
}

export default appWithTranslation(MyApp)
