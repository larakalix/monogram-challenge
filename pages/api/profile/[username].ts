import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@services/userService";
import { UserProps } from "types/data/user";
import { UserQueryType } from "types/services/user";
import { FeedQueryType } from "types/services/feed";
import { FeedProps } from "types/data/feed";
import { getFeeds } from "@services/feedService";

export default async function user(
    req: NextApiRequest,
    res: NextApiResponse<{ user: UserProps; feeds: FeedProps[] }>
) {
    const { username } = req.query;
    const user = await getUser(
        String(username),
        UserQueryType.ONE_USER_SUMMARY
    );

    const feeds = await getFeeds(user.id, FeedQueryType.FEED_BYUSER);

    res.status(200).json({ user, feeds });
}
