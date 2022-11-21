import {FC} from "react";
import useSWR from "swr";
import {SkillIcon} from "@atoms";
import {FlexDiv, HoverActionIconStyle, TextInterface, H3} from "@styles"
import {SkillInterface} from "@data/skill";
import scss from "./styles/styles.module.scss"

export interface SkillDivisionStyles {
    skillIconStyle: HoverActionIconStyle;
    titleStyle: TextInterface
}

type SkillDivisionProps = SkillDivisionStyles & { title: string }

const SkillDivision: FC<SkillDivisionProps> = ({title, skillIconStyle, titleStyle}) => {
    const {data} = useSWR(`/api/skills/${title}`)

    return (
        <FlexDiv className={scss.SkillsWrapper}>
            <H3 {...titleStyle}>{title}</H3>
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