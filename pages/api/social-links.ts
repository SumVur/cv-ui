import type {NextApiRequest, NextApiResponse} from "next";
import {SocialIconInterface} from "@data/social-links";
import {supabase} from "@helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse<SocialIconInterface[]>) => {
    const {data, error} = await supabase
        .from("social-links")
        .select("title,link,action");
    if (error) {
        res.status(500);
        return;
    }
    res.status(200).json(data);
};

export default handler;