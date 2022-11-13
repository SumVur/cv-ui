import type {NextApiRequest, NextApiResponse} from "next";
import {SocialLink} from "@data/social-links";

const handler = (req: NextApiRequest, res: NextApiResponse<SocialLink[]>) => {
    res.status(200).json(
        [
            {
                name: "Telegram",
                link:"https://t.me/AlinaSV"
            },
            {
                name: "Linkedin",
                link:"https://www.linkedin.com/in/oleksii-mukharovskyi-679795217/"
            }
        ]
    );
};

export default handler;