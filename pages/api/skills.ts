import type {NextApiRequest, NextApiResponse} from "next";
import {SkillInterface} from "@data/skill";

const path = "/skills"
const handler = (req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) => {
    res.status(200).json(
        [
            {
                title: "PHP",
                link:`${path}`,
                action:"location"
            },
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
                title: "NodeJs",
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
            {
                title: "Redis",
                link:`${path}`,
                action:"location"
            },
            {
                title: "Elasticsearch",
                link:`${path}`,
                action:"location"
            }
        ]
    );
};

export default handler;