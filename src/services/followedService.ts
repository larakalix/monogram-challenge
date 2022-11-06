import { request } from "./../../lib/datocms";
import { UserProps } from "types/data/user";

const FOLLOWED_QUERY = `query Followed ($authreference: String)  {
  allFollowers (
		orderBy: _createdAt_DESC,
		filter: {
      authreference: { eq: $authreference}
		}) {
    id
		authreference
    follower {
      username
      thumbnail {
        basename
        url
      }
      name
      lastname
      id
      email
      authreference
    }
    user {
      username
      thumbnail {
        basename
        url
      }
      name
      lastname
      id
      email
      authreference
    }
  }
}`;

export const fetcher = (authreference: string) =>
    request({
        query: FOLLOWED_QUERY,
        variables: { authreference },
        preview: false,
    });

export const getFolloweds = async (
    authreference: string
): Promise<UserProps[]> => {
    const { allFeeds } = await request({
        query: FOLLOWED_QUERY,
        variables: { authreference },
        preview: false,
    });

    return allFeeds;
};
