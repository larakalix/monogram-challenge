import { NextApiRequest, NextApiResponse } from "next";
import { createFeed } from "@services/feedService";
import { FeedProps } from "types/data/feed";

export default async function newFeed(
    req: NextApiRequest,
    res: NextApiResponse<{ feed: FeedProps }>
) {
    try {
        const data: FeedProps = JSON.parse(req.body);

        // const feed = await createFeed(data);

        const response = await fetch("https://site-api.datocms.com/items")
            .then((res) => res.json())
            .then((json) => {
                console.log("json", json.data);
            });

        res.status(200).json({ feed: {} as FeedProps });
    } catch (error: any) {
        console.log(error);
        res.status(500).end(error.message);
    }
}
