import {FlexDiv} from "@components/styles";
import {ProjectInterface} from "@data/project";
import {FC} from "react";
import scss from "./styles/styles.module.scss"
import {TeamTable} from "@atoms";

type ProjectProps = ProjectInterface;

const Project: FC<ProjectProps> = (
    {position, team}
) => {

    return (
        <FlexDiv className={scss.wrapper}>
            <h2>
                Position: {position}
            </h2>
            <TeamTable team={team}/>
        </FlexDiv>
    )
}
export default Project