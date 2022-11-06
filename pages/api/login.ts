import { NextApiRequest, NextApiResponse } from "next";
import { magic } from "./../../lib/magic";
import { setLoginSession } from "./../../lib/auth";
import { AuthResponse } from "types/api/response";

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<Partial<AuthResponse>>
) {
    try {
        const { authorization } = req.headers;

        if (!authorization)
            return res
                .status(401)
                .json({ error: "Missing authorization header" });

        const didToken = authorization.split(" ")[1];

        const metadata = await magic.users.getMetadataByToken(didToken);
        const session = { ...metadata };

        await setLoginSession(res, session);
        res.status(200).send({ authenticated: true });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
