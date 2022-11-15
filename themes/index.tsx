import {MainLayoutStyles} from "@components/layout/MainLayout";

export interface Theme {
    mainLayout: MainLayoutStyles
}
const iconSize = 32;
export const theme: Theme = {
    mainLayout: {
        headerStyle: {
            socialIconStyle: {
                width:iconSize,
                height:iconSize,
                fill: ["#C3D0D5"],
                hoverColor: "#F5BE17",
            }
        }
    }
}
