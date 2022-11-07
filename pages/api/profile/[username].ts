import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@services/userService";
import { UserProps } from "types/data/user";
import { UserQueryType } from "types/services/user";
import { FeedQueryType } from "types/services/feed";
import { FeedProps } from "types/data/feed";
import { getFeeds } from "@services/feedService";
import { getFollowersByUser } from "@services/followedService";

export default async function user(
    req: NextApiRequest,
    res: NextApiResponse<{ user: UserProps; feeds: FeedProps[] }>
) {
    const { username } = req.query;
    let user = await getUser(String(username), UserQueryType.ONE_USER_SUMMARY);

    if (user) {
        const followers = await getFollowersByUser(user.id);

        user.followers = followers;
    }

    const feeds = await getFeeds(user.id, FeedQueryType.FEED_BYUSER);

    res.status(200).json({ user, feeds });
}
