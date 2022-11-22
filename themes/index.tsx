import {MainLayoutStyles} from "@components/layout/MainLayout";
import {SkillsPageStyles} from "../pages/skills";
import {ExperienceStyles} from "../pages/experience";

export interface Theme {
    mainLayout: MainLayoutStyles
    skillsPage: SkillsPageStyles
    experiencePage: ExperienceStyles
}

const iconSize = 32;
export const theme: Theme = {
    mainLayout: {
        headerStyle: {
            socialIconStyle: {
                width: iconSize,
                height: iconSize,
                fill: ["#FBE1B0"],
                hoverColor: "#F5BE17",
            }
        }
    },
    skillsPage: {
        skillDivisionStyle: {
            skillIconStyle: {
                width: 80,
                height: 80,
                fill: [
                    "#c5ced7", "#9ab5b6", "#839da1",
                    "#748383", "#83989d", "#556569",
                    "#4e5b62",
                ],
                useDefaultColors: true,
                hoverColor: "#F5BE17",
            },
            titleStyle: {
                color: "black"
            }
        }
    },
    experiencePage: {
        projectStyle: {
            skillIconStyle: {
                width: 40,
                height: 40,
                fill: [
                    "#c5ced7", "#9ab5b6", "#839da1",
                    "#748383", "#83989d", "#556569",
                    "#4e5b62",
                ],
                useDefaultColors: true,
                hoverColor: "#F5BE17",
            }
        }
    }
}
