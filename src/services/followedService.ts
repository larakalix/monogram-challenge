import { request } from "./../../lib/datocms";
import { UserProps } from "types/data/user";

const FOLLOWED_QUERY = `query Feeds {
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

export const getFolloweds = async (): Promise<UserProps[]> => {
    const { allFeeds } = await request({
        query: FOLLOWED_QUERY,
        variables: { limit: 100 },
        preview: false,
    });

    return allFeeds;
};
