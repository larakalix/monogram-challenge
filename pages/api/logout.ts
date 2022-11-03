import { NextApiRequest, NextApiResponse } from "next";
import { Magic } from "@magic-sdk/admin";
import { LogoutResponse } from "types/api/response";

export default async function logout(
    req: NextApiRequest,
    res: NextApiResponse<Partial<LogoutResponse>>
) {
    try {
        const { issuer } = JSON.parse(req.body);

        const magic = new Magic(process.env.NEXT_MAGIC_SECRET_KEY!);
        // await magic.users.logoutByIssuer(issuer);

        res.status(200).json({ logout: true });
    } catch (error: any) {
        res.status(500).json({
            error: error.message || error.toString(),
        });
    }
}
