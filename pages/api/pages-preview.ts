import type {NextApiRequest, NextApiResponse} from "next";
import {PagePreview} from "@data/page-preview";

const handler = (req: NextApiRequest, res: NextApiResponse<PagePreview[]>) => {
    res.status(200).json(
        [
            {
                title: "Experience",
                url: "/experience",
                backgroundImage: "/Experience.jpg"
            },
            {
                title: "Skills",
                url: "/skills",
                backgroundImage: "/Skills.jpg"
            },
            {
                title: "Additional Info",
                url: "/additional-info",
                backgroundImage: "/AdditionalInfo.jpg"
            }
        ]
    );
};

export default handler;