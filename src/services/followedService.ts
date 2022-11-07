import { ApiError } from "@datocms/cma-client-node";
import { request } from "./../../lib/datocms";
import { clientRequest } from "../../lib/datocms";
import { UserProps } from "types/data/user";
import { SCHEMA_TYPES } from "@constants/schemaTypes";

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

const FOLLOWERS_BY_USER_QUERY = `query getFollowersByUser ($id: [ItemId])  {
  allFollowers(filter: {user: {in: $id}}) {
    id
    authreference
    user {
      id
    }
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
  }
}`;

const FOLLOW_QUERY = `query Follow($follower: ItemId, $user: ItemId) {
  follower(filter: {follower: {eq: $follower}, user: {eq: $user}}) {
    id
    user {
      id
    }
    follower {
      id
    }
  }
}
`;

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

export const getFollowersByUser = async (id: string) => {
    const { allFollowers } = await request({
        query: FOLLOWERS_BY_USER_QUERY,
        variables: { id: [id] },
        preview: false,
    });

    return allFollowers;
};

export const validateFollow = async (follower: string, user: string) => {
    const follow = await request({
        query: FOLLOW_QUERY,
        variables: { follower, user },
        preview: false,
    });

    return follow;
};

export const followUser = async (follower: string, user: UserProps) => {
    try {
        const client = await clientRequest();
        const follow = await client.items.create({
            item_type: { id: SCHEMA_TYPES.FOLLOWER, type: "item_type" },
            meta: {
                status: "published",
            },
            authreference: user.username,
            follower: follower,
            user: user.id,
        });

        return follow;
    } catch (e) {
        if (e instanceof ApiError) {
            console.log("ERROR__", e);
        } else {
            throw e;
        }
    }
};

export const removeUserFollow = async (id: string) => {
    try {
        const client = await clientRequest();
        const follow = await client.items.destroy(id);

        return follow;
    } catch (e) {
        if (e instanceof ApiError) {
            console.log("ERROR__", e);
        } else {
            throw e;
        }
    }
};
