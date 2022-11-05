import { request } from "./../../lib/datocms";
import { UserProps } from "types/data/user";

const ONE_USER_QUERY = `query User ($authreference: String) {
    user (filter: {authreference: {eq: $authreference}}) {
      id
      name
      lastname
      email
      createdAt
      username
      authreference
      thumbnail {
        basename
        url
      }
    }
  }`;

export const getUser = async (authreference: string): Promise<UserProps> => {
    const { user } = await request({
        query: ONE_USER_QUERY,
        variables: { authreference },
        preview: false,
    });

    return user;
};
