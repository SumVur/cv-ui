import type {NextApiRequest, NextApiResponse} from "next";
import {SkillInterface} from "@data/skill";

interface DivisionsInterface {
    [title: string]: SkillInterface[]
}

const path = "/skills"

export const divisions: DivisionsInterface = {
    "Beck-end": [
        {
            title: "PHP",
            link: `${path}`,
            action: "location"
        },
        {
            title: "JavaScript",
            link: `${path}`,
            action: "location"
        },
        {
            title: "TypeScript",
            link: `${path}`,
            action: "location"
        },
        {
            title: "NodeJs",
            link: `${path}`,
            action: "location"
        },
    ],
    "Front-end": [
        {
            title: "HTML",
            link:`${path}`,
            action:"location"
        },
        {
            title: "CSS",
            link:`${path}`,
            action:"location"
        },
        {
            title: "JavaScript",
            link:`${path}`,
            action:"location"
        },
        {
            title: "TypeScript",
            link:`${path}`,
            action:"location"
        },
        {
            title: "SASS",
            link:`${path}`,
            action:"location"
        },
        {
            title: "ReactF",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Jquery",
            link:`${path}`,
            action:"location"
        },
        {
            title: "RequireJs",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Knockout",
            link:`${path}`,
            action:"location"
        },
    ],
    "Databases-store":[
        {
            title: "MySql",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Postgres",
            link:`${path}`,
            action:"location"
        },
        {
            title: "MongoDb",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Redis",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Elasticsearch",
            link:`${path}`,
            action:"location"
        },
    ],
    "Other":[
        {
            title: "XDebug",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Docker",
            link:`${path}`,
            action:"location"
        },
        {
            title: "Kubernetes",
            link:`${path}`,
            action:"location"
        }
    ]
}
const handler = (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    const {division} = req.query
    res.status(200).json(divisions[`${division}`]);
}

export default handler;