import type {NextApiRequest, NextApiResponse} from "next";
import {PagePreview} from "@data/page-preview";

const handler = (req: NextApiRequest, res: NextApiResponse<PagePreview[]>) => {
    res.status(200).json(
        [
            {
                title: "Experience",
                backgroundImage: "/Experience.jpg"
            },
            {
                title: "Skills",
                backgroundImage: "/Skills.jpg"
            },
            {
                title: "Additional Info",
                backgroundImage: "/AdditionalInfo.jpg"
            }
        ]
    );
};

export default handler;