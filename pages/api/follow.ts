import { NextApiRequest, NextApiResponse } from "next";
import {
    followUser,
    removeUserFollow,
    validateFollow,
} from "@services/followedService";

export default async function follow(
    req: NextApiRequest,
    res: NextApiResponse<{ following: boolean }>
) {
    try {
        const { follower, user } = JSON.parse(req.body);

        const isFollowing = await validateFollow(
            follower as string,
            user.id as string
        );

        console.log("___isFollowing___", isFollowing.follower);

        let following = false;

        if (!isFollowing.follower) {
            const follow = await followUser(follower as string, user);
            console.log("IS___Following___", follow);
            following = true;
        } else {
            const follow = await removeUserFollow(isFollowing.follower.id);
            console.log("NOT___Following___", follow);
            following = false;
        }

        res.status(200).json({ following: following });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
