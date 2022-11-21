import type {NextApiRequest, NextApiResponse} from "next";
import {SocialIconInterface} from "@data/social-links";
import {supabase} from "@helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse<SocialIconInterface[]>) => {
    const {data, error} = await supabase
        .from("social-links")
        .select("title,link,action(title)");
    if (error) {
        res.status(500);
        return;
    }
    let response: SocialIconInterface[] = data?.map((item) => {
        return {
            title: item.title,
            link: item.link,
            // @ts-ignore
            action: item.action?.title
        }
    })
    res.status(200).json(response);
};

export default handler;