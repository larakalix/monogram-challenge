import { clientRequest, request } from "./../../lib/datocms";
import { FeedProps } from "types/data/feed";
import { FeedQueryType } from "types/services/feed";

const FEED_QUERY = `query Feeds ($limit: IntType) {
    allFeeds(first: $limit, orderBy: _createdAt_DESC) {
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

const FEED_BYUSER_QUERY = `query Feeds($id: ItemId, $limit: IntType) {
  allFeeds(first: $limit, orderBy: _createdAt_DESC, filter: {user: {eq: $id}}) {
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

const payloadFactory = (field: string, queryType: FeedQueryType) => {
    const payload = {
        ALL_FEEDS: {
            query: FEED_QUERY,
            variables: { limit: 100 },
        },
        FEED_BYUSER: {
            query: FEED_BYUSER_QUERY,
            variables: { id: field, limit: 100 },
        },
    };

    return payload[queryType];
};

export const getFeeds = async (
    field: string,
    queryType: FeedQueryType
): Promise<FeedProps[]> => {
    const { query, variables } = payloadFactory(field, queryType);

    const { allFeeds } = await request({
        query,
        variables,
        preview: false,
    });

    return allFeeds;
};

export const createFeed = async ({ content, user }: FeedProps) => {
    const client = await clientRequest();

    // const record = client.items.create({
    //     item_type: { type: "item_type", id: "123" },
    //     content,
    //     user,
    // });

    // const data = await client.items.list();

    // get feeds
    const data = await client.items.create({
        item_type: { type: "item_type", id: "123" },
        content,
        user: JSON.stringify(user),
    });

    console.log("createFeed", data);

    return data;
};
