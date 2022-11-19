import {FC} from "react";
import useSWR from "swr";
import fetch from "node-fetch";
import {SkillIcon} from "@atoms";
import {FlexDiv, HoverActionIconStyle} from "@styles"
import {SkillInterface} from "@data/skill";
import scss from "./styles/styles.module.scss"

export interface SkillDivisionStyles {
    skillIconStyle: HoverActionIconStyle;
}

type SkillDivisionProps = SkillDivisionStyles & { title: string }

const SkillDivision: FC<SkillDivisionProps> = ({title, skillIconStyle}) => {
    const {data} = useSWR(`/api/skills/${title}`, (apiURL: string) => fetch(apiURL, {timeout: 8000}).then(res => res.json()))

    console.log(skillIconStyle)
    return (
        <FlexDiv className={scss.SkillsWrapper}>
            <h3>{title}</h3>
            <hr className={scss.hr}/>
            <FlexDiv className={scss.Skills}>
                {data ? data?.map((item: SkillInterface, index: string) => (<SkillIcon
                    actionIconClassName={scss.Icon}
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
        </FlexDiv>
    )
}

export default SkillDivision