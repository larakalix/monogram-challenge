import { NextApiRequest, NextApiResponse } from "next";
import { createFeed } from "@services/feedService";
import { FeedProps } from "types/data/feed";
import { UserProps } from "types/data/user";

export default async function newFeed(
    req: NextApiRequest,
    res: NextApiResponse<{ feed: FeedProps }>
) {
    try {
        const data: {
            feed: FeedProps;
            user: UserProps;
        } = JSON.parse(req.body);

        const response = await createFeed(data.feed.content, data.user);

        res.status(200).json({ feed: {} as FeedProps });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
