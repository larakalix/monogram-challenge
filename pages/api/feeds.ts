import { NextApiRequest, NextApiResponse } from "next";
import { FeedProps } from "types/data/feed";
import { FeedQueryType } from "types/services/feed";
import { getFeeds } from "@services/feedService";

export default async function feeds(
    req: NextApiRequest,
    res: NextApiResponse<{ feeds: FeedProps[] }>
) {
    try {
        const feeds = await getFeeds("", FeedQueryType.ALL_FEEDS);

        res.status(200).json({ feeds });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
