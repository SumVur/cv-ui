import {FC} from "react";
import {FlexDiv} from "@components/common/styles"
import useSWR from "swr";
import fetch from "node-fetch";
import {SkillInterface} from "@data/skill";
import {HoverActionIconStyle} from "@common/styles/HoverActionIcon";
import scss from "./styles/styles.module.scss"
import {SkillIcon} from "@common/atoms";

export interface SkillsStyles {
    skillIconStyle: HoverActionIconStyle;
}

const Skills: FC<SkillsStyles> = ({skillIconStyle}) => {
    const {data} = useSWR('/api/skills', (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

    return (
        <FlexDiv className={scss.Skills}>
            {data ? data?.map((item: SkillInterface, index: string) => (<SkillIcon
                key={index}
                id={`${item.title}_skill`}
                {...item}
                {...skillIconStyle}
            />)) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}

export default Skills