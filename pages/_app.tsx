import type {AppProps} from 'next/app'
import {theme} from "themes";
import {ThemeProvider} from "styled-components";
import {appWithTranslation} from "next-i18next";
import {Cardo} from '@next/font/google'
import './styles.scss'
import {MainLayout} from "@layout";
import {createFetcher, loadToken} from "../helper";
import {SWRConfig} from 'swr';
import {useEffect, useState} from "react";

const cardo = Cardo({weight: "400", subsets: ["latin"]})

function MyApp({Component, pageProps}: AppProps) {
    const [token, setToken] = useState(null)

    useEffect(() => {
        (async function anyNameFunction() {
            const token = await loadToken();
            setToken(token)
        })();
    }, []);
    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${cardo.style.fontFamily};
              }
            `}</style>
            <ThemeProvider theme={theme}>
                {token ? (
                    <SWRConfig value={{fetcher: createFetcher(token)}}>
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    </SWRConfig>
                ) : (
                    <div>
                        loading...
                    </div>
                )}
            </ThemeProvider>
        </>
    )
}

export default appWithTranslation(MyApp)
