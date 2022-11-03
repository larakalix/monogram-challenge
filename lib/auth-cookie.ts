import { NextApiResponse } from "next";
import { CookieSerializeOptions, serialize } from "cookie";

export const MAX_AGE = 60 * 60 * 24;

export const setTokenCookie = (res: NextApiResponse, token: string) => {
    const cookieOptions: CookieSerializeOptions = {
        maxAge: MAX_AGE,
        httpOnly: true,
        secure: process.env.NEXT_ENV === "production",
        path: "/",
        sameSite: "lax",
    };
    const cookie = serialize("token", token, cookieOptions);
    res.setHeader("Set-Cookie", cookie);
};
