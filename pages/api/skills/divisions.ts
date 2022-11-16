import {NextApiRequest, NextApiResponse} from "next";
import {divisions} from "./[division]";

const handler = (req: NextApiRequest, res: NextApiResponse<string[]>) => {
    res.status(200).json(Object.keys(divisions));
};

export default handler;