import type {NextApiRequest, NextApiResponse} from "next";
import {SocialLink} from "@data/social-links";

const handler = (req: NextApiRequest, res: NextApiResponse<SocialLink[]>) => {
    res.status(200).json(
        [
            {
                name: "Telegram",
                link: "https://t.me/AlinaSV",
                action: "open"
            },
            {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/oleksii-mukharovskyi-679795217/",
                action: "open"
            },
            {
                name: "Instagram",
                link: "https://www.instagram.com/alex_sumvar/",
                action: "open"
            },
            {
                name: "GitHub",
                link: "https://github.com/SumVur",
                action: "open"
            },
            {
                name: "Email",
                link: "mailto:a.mukharovskiy@gmail.com",
                action: "location"
            }
        ]
    );
};

export default handler;