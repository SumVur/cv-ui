import {NextApiRequest, NextApiResponse} from "next";
import {supabase} from "@helpers";
import {divisionsOfSkills} from "@data/skill";

const handler = async (req: NextApiRequest, res: NextApiResponse<string[]>) => {
    const {data, error} = await supabase
        .from(divisionsOfSkills)
        .select("title");
    if (error) {
        res.status(500);
        return;
    }
    const response = data?.map((item) => item.title)
    res.status(200).json(response);
};

export default handler;