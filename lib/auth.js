import Iron from "@hapi/iron";
import { getTokenCookie, MAX_AGE, setTokenCookie } from "./auth-cookies";

const TOKEN_SECRET = process.env.NEXT_TOKEN_SECRET;

export const setLoginSession = async (res, session) => {
    const createdAt = Date.now();

    const obj = { ...session, createdAt, maxAge: MAX_AGE };
    const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);

    setTokenCookie(res, token);
};

export const getLoginSession = async (req) => {
    const token = getTokenCookie(req);

    if (!token) return;

    const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
    const expiresAt = session.createdAt + session.maxAge * 1000;

    if (Date.now() > expiresAt) throw new Error("Session expired");

    return session;
};
