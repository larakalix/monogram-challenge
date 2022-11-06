import { NextApiRequest, NextApiResponse } from "next";
import { clientRequest } from "../../../../lib/datocms";

export default async function updateUser(
    req: NextApiRequest,
    res: NextApiResponse<{ user: any }>
) {
    try {
        const { id } = req.query;
        const { user } = JSON.parse(req.body);

        const response = await clientRequest().items.update(String(id), {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
        });

        res.status(200).json({
            user: response,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
