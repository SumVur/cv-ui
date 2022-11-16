import type {NextApiRequest, NextApiResponse} from "next";
import {SocialIconInterface} from "@data/social-links";

const handler = (req: NextApiRequest, res: NextApiResponse<SocialIconInterface[]>) => {
    res.status(200).json(
        [
            {
                title: "Telegram",
                link: "https://t.me/AlinaSV",
                action: "open"
            },
            {
                title: "Linkedin",
                link: "https://www.linkedin.com/in/oleksii-mukharovskyi-679795217/",
                action: "open"
            },
            {
                title: "Instagram",
                link: "https://www.instagram.com/alex_sumvar/",
                action: "open"
            },
            {
                title: "GitHub",
                link: "https://github.com/SumVur",
                action: "open"
            },
            {
                title: "Email",
                link: "mailto:a.mukharovskiy@gmail.com",
                action: "location"
            }
        ]
    );
};

export default handler;