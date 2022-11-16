import {FC} from "react";
import Skills, {SkillsStyles} from "@common/organisms/Skills";
import {useTheme} from "styled-components";
import {Theme} from "@themes";

export type SkillsPageStyles = SkillsStyles;

const SkillsPage: FC = () => {
    const theme = useTheme() as Theme;

    const {skillIconStyle} = theme.skillsPage;
    return (
        <main>
            <Skills skillIconStyle={skillIconStyle}/>
        </main>
    )
}

export default SkillsPage
