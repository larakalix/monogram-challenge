import { NextApiRequest, NextApiResponse } from "next";
import { getSuggestions } from "@services/userService";
import { UserProps } from "types/data/user";

export default async function suggestions(
    req: NextApiRequest,
    res: NextApiResponse<{ suggestions: UserProps[] }>
) {
    try {
        const { id } = req.query;

        const suggestions = await getSuggestions(20, String(id));

        res.status(200).json({ suggestions });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
