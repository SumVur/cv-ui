import type {NextApiRequest, NextApiResponse} from "next";
import {NavigationLink} from "@data/navigation-link";

const handler = (req: NextApiRequest, res: NextApiResponse<NavigationLink[]>) => {
    res.status(200).json(
        [
            {
                title: "Experience",
                url: "/experience"
            },
            {
                title: "Skills",
                url: "/skills"
            },
            {
                title: "Additional Info",
                url: "/additional-info"
            }
        ]
    );
};

export default handler;