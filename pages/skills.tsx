import {FC} from "react";
import {useTheme} from "styled-components";
import {Theme} from "@themes";
import {Skills, SkillsStyles} from "@organisms";

export type SkillsPageStyles = SkillsStyles;

const SkillsPage: FC = () => {
    const theme = useTheme() as Theme;

    const {skillDivisionStyle} = theme.skillsPage;
    return (
        <main>
            <Skills skillDivisionStyle={skillDivisionStyle}/>
        </main>
    )
}

export default SkillsPage
