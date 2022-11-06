import { NextApiRequest, NextApiResponse } from "next";
import { UpdateUser } from "@services/profileService";

export default async function updateUser(
    req: NextApiRequest,
    res: NextApiResponse<{ user: any }>
) {
    try {
        const { id } = req.query;
        const { user } = JSON.parse(req.body);

        const response = await UpdateUser(String(id), user);

        res.status(200).json({
            user: response,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
