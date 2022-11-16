import {MainLayoutStyles} from "@components/layout/MainLayout";
import {SkillsPageStyles} from "../pages/skills";

export interface Theme {
    mainLayout: MainLayoutStyles
    skillsPage: SkillsPageStyles
}

const iconSize = 32;
export const theme: Theme = {
    mainLayout: {
        headerStyle: {
            socialIconStyle: {
                width: iconSize,
                height: iconSize,
                fill: ["#C3D0D5"],
                hoverColor: "#F5BE17",
            }
        }
    },
    skillsPage: {
        skillIconStyle: {
            width: 80,
            height: 80,
            fill: [
                "#87aebe", "#7a9394", "#839da1",
                "#748383", "#83989d", "#556569",
                "#4e5b62",
            ],
            useDefaultColors:true,
            hoverColor: "#F5BE17",
        }
    }
}
