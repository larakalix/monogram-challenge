import { NextApiResponse } from "next";
import { MagicUserMetadata } from "magic-sdk";
import Iron from "@hapi/iron";
import { MAX_AGE, setTokenCookie } from "./auth-cookie";

const TOKEN_SECRET = process.env.NEXT_TOKEN_SECRET || new Date().toISOString();

export const setLoginSession = async (
    res: NextApiResponse,
    metadata: MagicUserMetadata
) => {
    const session = {
        ...metadata,
        createdAt: Date.now(),
        maxAge: MAX_AGE,
    };
    const token = await Iron.seal(session, TOKEN_SECRET!, Iron.defaults);
    console.log("setLoginSession", token);
    setTokenCookie(res, token);
};
