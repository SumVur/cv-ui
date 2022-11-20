import useSWR from "swr";
import fetch from "node-fetch";
import {FlexDiv} from "@styles";
import {ProjectInterface} from "@data/project";
import {Project} from "@molecules";

const Projects = () => {
    const {data} = useSWR('/api/projects', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

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