import React, {FC} from "react";
import {Header} from "@common/organisms";
import {useTheme} from "styled-components";
import {Theme} from "@themes";
import {HeaderStyle} from "@common/organisms/Header";

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