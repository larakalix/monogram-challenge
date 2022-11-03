import { NextApiRequest, NextApiResponse } from "next";
import { Magic } from "@magic-sdk/admin";
import { AuthResponse } from "types/api/response";

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<Partial<AuthResponse>>
) {
    try {
        const magic = new Magic(process.env.NEXT_MAGIC_SECRET_KEY!);
        const { authorization } = req.headers;

        if (!authorization)
            return res
                .status(401)
                .json({ error: "Missing authorization header" });

        const didToken = authorization.split(" ")[1];
        magic.token.validate(didToken);

        res.status(200).json({ authenticated: true });
    } catch (error: any) {
        res.status(500).json({
            authenticated: false,
            error: error.message || error.toString(),
        });
    }
}
