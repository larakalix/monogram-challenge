import { request } from "./../../lib/datocms";
import { FeedProps } from "types/data/feed";

const FEED_QUERY = `query Feeds {
    allFeeds(orderBy: _createdAt_DESC) {
        id
        createdAt
        content
        user {
          name
          username
          thumbnail {
            url
            basename
          }
        }
    }
  }`;

export const getFeeds = async (): Promise<FeedProps[]> => {
    const { allFeeds } = await request({
        query: FEED_QUERY,
        variables: { limit: 100 },
        preview: false,
    });
    
    return allFeeds;
};
