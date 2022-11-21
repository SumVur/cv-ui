import {FC} from "react";
import useSWR from "swr";
import {FlexDiv} from "@styles";
import {SkillDivision, SkillDivisionStyles} from "@molecules";
import scss from "./styles/styles.module.scss"

export interface SkillsStyles {
    skillDivisionStyle: SkillDivisionStyles
}

const Skills: FC<SkillsStyles> = ({skillDivisionStyle}) => {
    const {data} = useSWR('/api/skills/divisions')

    return (
        <FlexDiv className={scss.Skills}>
            {data ? data?.map((item: string, index: string) => (
                <SkillDivision key={index} title={item} {...skillDivisionStyle}/>
            )) : (
                <div>
                    loading...
                </div>
            )}
        </FlexDiv>
    )
}

export default Skills