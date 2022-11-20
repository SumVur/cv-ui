import type {NextApiRequest, NextApiResponse} from "next";
import {ProjectInterface} from "@data/project";
import {getSkills} from "./skills";

const handler = (req: NextApiRequest, res: NextApiResponse<ProjectInterface[]>) => {
    res.status(200).json(
        [
            {
                position: "Back-End developer",
                team: [
                    {
                        position: "Back-End developer",
                        quantity: 2
                    },
                    {
                        position: "FrontEnd developer",
                        quantity: 3
                    },
                    {
                        position: "QA",
                        quantity: 3
                    }
                ],
                technologists: getSkills(["PHP", "JavaScript", "HTML", "CSS", "Jquery", "RequireJs", 'Knockout', "Redis", "Elasticsearch", "MySql"])
            }
        ]
    );
};

export default handler;