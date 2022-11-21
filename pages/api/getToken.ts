import {NextApiRequest, NextApiResponse} from "next";
import {getToken} from "../../helper";

const handler = (req: NextApiRequest, res: NextApiResponse<string>) => {
    res.status(200).json(`${getToken()}`)
}

export default handler;