import {MainLayoutStyles} from "@components/layout/MainLayout";
import { DefaultTheme } from 'styled-components'


export interface Theme {
    mainLayout: MainLayoutStyles
}

export const theme: Theme = {
    mainLayout: {
        footerStyle: {
            socialIconStyle: {
                size: 32,
                color: ["#C3D0D5"],
                hoverColor: "#F5BE17",
            }
        }
    }
}
