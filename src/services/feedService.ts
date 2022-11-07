import { ApiError } from "@datocms/cma-client-node";
import { clientRequest, request } from "./../../lib/datocms";
import { FeedProps } from "types/data/feed";
import { FeedQueryType } from "types/services/feed";
import { UserProps } from "types/data/user";
import { SCHEMA_TYPES } from "@constants/schemaTypes";

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

export const createFeed = async (content: string, user: UserProps) => {
    try {
        const client = await clientRequest();

        const feed = await client.items.create({
            item_type: { id: SCHEMA_TYPES.FEED, type: "item_type" },
            meta: {
                status: "published",
            },
            content: {
                en: content,
            },
            user: user.id,
        });

        return feed;
    } catch (e) {
        if (e instanceof ApiError) {
            console.log("ERROR__", e);
        } else {
            throw e;
        }
    }
};
