import type {NextApiRequest, NextApiResponse} from "next";
import {ProjectInterface, Team} from "@data/project";
import {supabase} from "@helpers";
import {SkillInterface} from "@data/skill";

const handler = async (req: NextApiRequest, res: NextApiResponse<ProjectInterface[]>) => {
    const {data, error} = await supabase
        .from("projects")
        .select("*,positions(title)");
    if (error) {
        res.status(500);
        return;
    }
    const response = await Promise.all(data?.map(async (item) => {
        const technologists = await getProjectTechnologists(item.id).then((response) => response);
        const team = await getProjectTeam(item.id).then((response) => response);
        const project: ProjectInterface = {
            title: item.title,
            position: item.positions.title,
            additionalInfo: item.additionalInfo,
            technologists: technologists ?? [],
            team: team ?? []
        }
        return project
    }))
    res.status(200).json(response);
};

export default handler;

async function getProjectTechnologists(projectId: number): Promise<SkillInterface[] | null> {
    const {data, error} = await supabase
        .from("technologistsInProject")
        .select("project,skills(*)")
        .eq("project", projectId);
    if (error) {
        return null
    }
    return data?.map((item) => {
        let skill: SkillInterface = {
            title: item.skills.title,
            link: item.skills.link
        }
        return skill
    })
}

async function getProjectTeam(projectId: number): Promise<Team[] | null> {
    const {data, error} = await supabase
        .from("projectTeam")
        .select("quantity,positions(*)")
        .eq("project", projectId);
    if (error) {
        return null
    }
    return data?.map((item) => {
        let team: Team = {
            position: item.positions.title,
            quantity: item.quantity
        }
        return team
    })
}