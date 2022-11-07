import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@services/userService";
import { UserProps } from "types/data/user";
import { getLoginSession } from "../../lib/auth";
import { UserQueryType } from "types/services/user";
import { getFollowersByUser } from "@services/followedService";

export default async function user(
    req: NextApiRequest,
    res: NextApiResponse<{ user: UserProps }>
) {
    const { issuer } = await getLoginSession(req);
    let user = await getUser(String(issuer), UserQueryType.ONE_USER);

    if (user) {
        const followers = await getFollowersByUser(user.id);

        user.followers = followers;
    }

    res.status(200).json({ user: { ...user, issuer } });
}
