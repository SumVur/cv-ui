import type {NextApiRequest, NextApiResponse} from "next";
import {divisionsOfSkills, SkillInterface, skillsInDivisions, skillTable} from "@data/skill";
import {supabase} from "@helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    const {division} = req.query

    const {data, error} = await supabase
        .from(skillsInDivisions)
        .select(`
        ${skillTable}(title,link),
        ${divisionsOfSkills}(title)
        `)
        .eq(`${divisionsOfSkills}.title`, `${division}`)

    if (error) {
        console.log(error)
        res.status(500);
        return;
    }
    const response: SkillInterface[] = data?.filter((item) => item.divisionsOfSkills != null).map((item) => {
        let skill: SkillInterface = {
            // @ts-ignore
            title: item.skills?.title,
            // @ts-ignore
            link: item.skills?.link
        }
        return skill
    })

    res.status(200).json(response);
}

export default handler;