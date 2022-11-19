import type {NextApiRequest, NextApiResponse} from "next";
import {SkillInterface} from "@data/skill";
import {getSkills} from "./index";

interface DivisionsInterface {
    [title: string]: SkillInterface[]
}

export const divisions: DivisionsInterface = {
    "Back-end": getSkills(["PHP", "JavaScript", "TypeScript", "NodeJs"]),
    "Front-end": getSkills(["HTML", "CSS", "JavaScript", "TypeScript", "SASS", "ReactF", "Jquery", "RequireJs", "Knockout"]),
    "Databases-store": getSkills(["MySql", "Postgres", "MongoDb", "Redis", "Elasticsearch"]),
    "Other": getSkills(["XDebug", "Docker", "Kubernetes"])
}
const handler = (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    const {division} = req.query
    res.status(200).json(divisions[`${division}`]);
}

export default handler;