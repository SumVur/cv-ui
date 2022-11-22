import {Projects, ProjectsStyles,} from "@organisms";
import {useTheme} from "styled-components";
import {Theme} from "@themes";

export type ExperienceStyles = ProjectsStyles;

const Experience = () => {
    const theme = useTheme() as Theme;

    const {projectStyle} = theme.experiencePage;
    return (
        <main>
            <Projects projectStyle={projectStyle}/>
        </main>
    )
}

export default Experience
