import {FC} from "react";
import useSWR from "swr";
import fetch from "node-fetch";
import {FlexDiv, HoverActionIconStyle} from "@styles";
import {SkillDivision} from "@molecules";
import scss from "./styles/styles.module.scss"

export interface SkillsStyles {
    skillIconStyle: HoverActionIconStyle;
}

const Skills: FC<SkillsStyles> = ({skillIconStyle}) => {
    const {data} = useSWR('/api/skills/divisions', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

    return (
        <FlexDiv className={scss.Skills}>
            {data ? data?.map((item: string, index: string) => (
                <SkillDivision key={index} title={item} skillIconStyle={skillIconStyle}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}

export default Skills