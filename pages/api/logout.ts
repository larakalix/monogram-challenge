import { NextApiRequest, NextApiResponse } from "next";
import { magic } from "./../../lib/magic";
import { LogoutResponse } from "types/api/response";
import { removeTokenCookie } from "../../lib/auth-cookies";
import { getLoginSession } from "../../lib/auth";

export default async function logout(
    req: NextApiRequest,
    res: NextApiResponse<Partial<LogoutResponse>>
) {
    try {
        const session = await getLoginSession(req);

        if (session) {
            await magic.users.logoutByIssuer(session.issuer);
            removeTokenCookie(res);
        }
    } catch (error: any) {
        res.status(500).json({
            error: error.message || error.toString(),
        });
    }

    res.writeHead(302, { Location: "/" });
    res.end();
}
