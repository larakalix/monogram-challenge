import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;

    const key = process.env.NEXT_DATO_CMS_TOKEN;

    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${key}`,
        },
    });
    
    return client.request(query, variables);
}
