import { NextApiRequest, NextApiResponse } from "next";
import { getLoginSession } from "../../lib/auth";
import { magic } from "./../../lib/magic";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const session = await getLoginSession(req);

    res.status(200).json({ user: session || null });
}
