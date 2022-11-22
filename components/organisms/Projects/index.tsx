import useSWR from "swr";
import {FlexDiv} from "@styles";
import {ProjectInterface} from "@data/project";
import {Project, ProjectStyles} from "@molecules";
import {FC} from "react";

export interface ProjectsStyles {
    projectStyle: ProjectStyles
}

const Projects: FC<ProjectsStyles> = ({projectStyle}) => {
    const {data} = useSWR('/api/projects')

    return (
        <FlexDiv style={{justifyContent: "space-around", flexWrap: "wrap"}}>
            {data ? data?.map((item: ProjectInterface, index: string) => (
                <Project key={index} {...item} {...projectStyle}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}

export default Projects