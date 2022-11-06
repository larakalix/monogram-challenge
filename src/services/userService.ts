import { request } from "./../../lib/datocms";
import { UserProps } from "types/data/user";
import { UserQueryType } from "types/services/user";

const ONE_USER_QUERY = `query User ($authreference: String) {
  user (filter: {authreference: {eq: $authreference}}) {
    id
    name
    lastname
    email
    createdAt
    username
    authreference
    color {
      hex
      red
      green
      blue
      alpha
    }
    thumbnail {
      basename
      url
    }
    followers {
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
    }
  }
}`;

const ONE_USER_SUMMARY_QUERY = `query User ($username: String) {
  user (filter: {username: {eq: $username}}) {
    id
    name
    lastname
    email
    createdAt
    username
    authreference
    color {
      hex
      red
      green
      blue
      alpha
    }
    thumbnail {
      basename
      url
    }
    followers {
      id
    }
  }
}`;

const payloadFactory = (field: string, queryType: UserQueryType) => {
    const payload = {
        ONE_USER: {
            query: ONE_USER_QUERY,
            variables: { authreference: field },
        },
        ONE_USER_SUMMARY: {
            query: ONE_USER_SUMMARY_QUERY,
            variables: { username: field },
        },
    };

    return payload[queryType];
};

export const getUser = async (
    field: string,
    queryType: UserQueryType
): Promise<UserProps> => {
    const { query, variables } = payloadFactory(field, queryType);

    const { user } = await request({
        query,
        variables,
        preview: false,
    });

    return user;
};
