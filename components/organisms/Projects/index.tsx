import useSWR from "swr";
import {FlexDiv} from "@styles";
import {ProjectInterface} from "@data/project";
import {Project} from "@molecules";

const Projects = () => {
    const {data} = useSWR('/api/projects')

    return (
        <FlexDiv>
            {data ? data?.map((item: ProjectInterface, index: string) => (
                <Project key={index} {...item}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}

export default Projects