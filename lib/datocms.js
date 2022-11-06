import { GraphQLClient } from "graphql-request";
import { buildClient } from "@datocms/cma-client-node";

const key = process.env.NEXT_DATO_CMS_TOKEN;

const getInstance = (preview) => {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;

    return new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${key}`,
        },
    });
};

export function request({ query, variables, preview }) {
    const client = getInstance(preview);

    return client.request(query, variables);
}

export function clientRequest() {
    const instance = buildClient({ apiToken: key });

    return instance;
}
