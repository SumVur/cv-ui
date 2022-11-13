import React, {FC} from "react";
import {Footer, Header} from "@common/organisms";
import {FooterStyle} from "@common/organisms";
import {useTheme} from "styled-components";
import {Theme} from "@themes";

export interface MainLayoutStyles {
    footerStyle: FooterStyle;
}

type  MainLayoutProps = { children: React.ReactNode };


const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const theme = useTheme() as Theme;

    const {footerStyle} = theme.mainLayout;

    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer{...footerStyle}/>
        </>
    )
}

export default MainLayout;