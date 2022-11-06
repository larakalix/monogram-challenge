import { NextApiRequest, NextApiResponse } from "next";
import { FeedProps } from "types/data/feed";

export default async function newFeed(
    req: NextApiRequest,
    res: NextApiResponse<{ feed: FeedProps }>
) {
    console.log("new feed", req);
    res.status(200).json({ feed: {} as FeedProps });
}
