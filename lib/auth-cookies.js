import { serialize } from "cookie";

export const MAX_AGE = 60 * 60 * 8; // 8 hours

export const setTokenCookie = (res, token) => {
    const cookie = serialize("authToken", token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });

    res.setHeader("Set-Cookie", cookie);
};

export const parseCookies = (req) => {
    if (req.cookies) return req.cookies;

    const cookie = req.headers?.cookie;
    return parse(cookie || "");
};

export const getTokenCookie = (req) => {
    const cookies = parseCookies(req);
    return cookies.authToken;
};

export const removeTokenCookie = (res) => {
    const cookie = serialize("authToken", "", {
        maxAge: -1,
        path: "/",
    });

    res.setHeader("Set-Cookie", cookie);
};
