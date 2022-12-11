import {FC} from "react";
import {SkillIcon} from "@atoms";
import {FlexDiv, HoverActionIconStyle, TextInterface, H3} from "@styles"
import scss from "./styles/styles.module.scss"
import {GetAllSkillsInDivisionQuery, SkillsDivision} from "@graphql/generated/graphql";
import {useQuery} from "@apollo/client";
import GetAllSkillsInDivision from "@graphql/queries/GetAllSkillsInDivision.graphql";

export interface SkillDivisionStyles {
    skillIconStyle: HoverActionIconStyle;
    titleStyle: TextInterface
}

type SkillDivisionProps = SkillDivisionStyles & Pick<SkillsDivision, "title" | "id">

const SkillDivision: FC<SkillDivisionProps> = ({title, id, skillIconStyle, titleStyle}) => {
    const {data, loading, error} = useQuery<GetAllSkillsInDivisionQuery>(GetAllSkillsInDivision, {variables: {id: id}});

    if (error) {
        return null;
    }

    const items = data?.getSkillsDivision?.skills?.map((item, index) => (
        <SkillIcon
            key={index}
            actionIconClassName={scss.Icon}
            id={`${item.title}_skill`}
            link={item.link}
            // @ts-ignore
            title={item.title}
            {...skillIconStyle}
        />
    ))

    return (
        <FlexDiv className={scss.SkillsWrapper}>
            <H3 {...titleStyle}>{title}</H3>
            <hr className={scss.hr}/>
            <FlexDiv className={scss.Skills}>
                {loading ? (
                    <div>
                        loading...
                    </div>
                ) : items}
            </FlexDiv>
        </FlexDiv>
    )
}

export default SkillDivision