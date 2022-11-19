import type {NextApiRequest, NextApiResponse} from "next";
import {SkillInterface} from "@data/skill";
import * as icons from "@media/generated/Skills";

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

const handler = (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    res.status(200).json(skills);
};

export default handler;