import {FlexDiv, HoverActionIconStyle} from "@components/styles";
import {ProjectInterface} from "@data/project";
import {FC} from "react";
import scss from "./styles/styles.module.scss"
import {SkillIcon, TeamTable} from "@atoms";

export interface ProjectStyles {
    skillIconStyle: HoverActionIconStyle;
}

type ProjectProps = ProjectInterface & ProjectStyles;

const Project: FC<ProjectProps> = (
    {title, position, team, technologists, skillIconStyle}
) => {

    return (
        <FlexDiv className={scss.wrapper}>
            <h2>
                Project: {title}
            </h2>
            <h2>
                Developer role: {position}
            </h2>
            <FlexDiv>
                <h3>Technologists:</h3>
                <FlexDiv className={scss.technologists}>
                    {technologists.map((item, index) => (
                        <SkillIcon
                            actionIconClassName={scss.icon}
                            key={index}
                            id={`${item.title}_technologists`}
                            {...item}
                            {...skillIconStyle}
                        />
                    ))}
                </FlexDiv>
            </FlexDiv>
            <TeamTable team={team}/>
        </FlexDiv>
    )
}
export default Project