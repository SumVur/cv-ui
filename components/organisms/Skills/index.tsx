import {FC} from "react";
import {useQuery} from "@apollo/client";
import {FlexDiv} from "@styles";
import {SkillDivision, SkillDivisionStyles} from "@molecules";
import scss from "./styles/styles.module.scss"
import GetAllSkillsDivisionsTitle from "@graphql/queries/GetAllSkillsDivisionsTitle.graphql";
import {GetAllSkillsDivisionsTitleQuery} from "@graphql/generated/graphql";

export interface SkillsStyles {
    skillDivisionStyle: SkillDivisionStyles
}

const Skills: FC<SkillsStyles> = ({skillDivisionStyle}) => {
    const {data, loading, error} = useQuery<GetAllSkillsDivisionsTitleQuery>(GetAllSkillsDivisionsTitle);

    if (error) {
        return null;
    }
    const SkillDivisions = data?.getSkillsDivisions?.map((item, index) => (
        <SkillDivision key={index} id={item.id} title={item.title} {...skillDivisionStyle}/>
    ))

    return (
        <FlexDiv className={scss.Skills}>
            {loading ? (
                <div>
                    loading...
                </div>
            ) : SkillDivisions}
        </FlexDiv>
    )
}

export default Skills