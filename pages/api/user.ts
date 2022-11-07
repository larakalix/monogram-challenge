import { NextApiRequest, NextApiResponse } from "next";
import { getUser, createUser } from "@services/userService";
import { getFollowersByUser } from "@services/followedService";
import { UserProps } from "types/data/user";
import { UserQueryType } from "types/services/user";

export default async function user(
    req: NextApiRequest,
    res: NextApiResponse<{ user: UserProps }>
) {
    try {
        const payload = JSON.parse(req.body);

        let user = await getUser(
            String(payload?.nickname),
            UserQueryType.ONE_USER
        );

        if (user) {
            const followers = await getFollowersByUser(user.id);
            user.followers = followers;
        } else {
            user = (await createUser(payload)) as UserProps;
        }

        res.status(200).json({ user: { ...user, issuer: payload?.nickname } });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
