import type {NextApiRequest, NextApiResponse} from "next";
import {SkillInterface, skillTable} from "@data/skill";
import * as icons from "@media/generated/Skills";
import {supabase} from "@helpers"

function createSkill(title: keyof typeof icons): SkillInterface {
    return {
        title,
        link: "/skills",
    }
}

function createAllSkills(): SkillInterface[] {
    let skills: SkillInterface[] = [];

    for (let iconsKey in icons) {
        // @ts-ignore
        skills.push(createSkill(iconsKey))
    }

    return skills;
}

const skills: SkillInterface[] = createAllSkills();

export function getSkills(skillsTitles: (keyof typeof icons)[]): SkillInterface[] {
    let finalSkills: SkillInterface[] = [];

    skillsTitles.forEach((item) => {
        finalSkills.push(skills.filter((skill) => skill.title === item)[0])
    })

    return finalSkills;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    const {data, error} = await supabase
        .from(skillTable)
        .select("title,link");
    if (error) {
        res.status(500);
        return;
    }
    const response: SkillInterface[] = data?.map((item) => {
        let skill: SkillInterface = {
            title: item.title,
            link: item.link
        }
        return skill
    })
    res.status(200).json(response);
};

export default handler;