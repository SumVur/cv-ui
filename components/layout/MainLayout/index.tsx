import React, {FC} from "react";
import {useTheme} from "styled-components";
import {Theme} from "@themes";
import {Header, HeaderStyle} from "@organisms";

export interface MainLayoutStyles {
    headerStyle: HeaderStyle;
}

type  MainLayoutProps = { children: React.ReactNode };

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const theme = useTheme() as Theme;

    const {headerStyle} = theme.mainLayout;

    return (
        <>
            <Header {...headerStyle}/>
            {children}
        </>
    )
}

export default MainLayout;