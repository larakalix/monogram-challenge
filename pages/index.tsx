import type { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import { request } from "./../lib/datocms";
import { useQuerySubscription } from "react-datocms";
import { HomePage } from "@views/HomePage";

export default function Home({}: InferGetStaticPropsType<
    typeof getServerSideProps
>) {
    return (
        <>
            <HomePage />
        </>
    );
}

// const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
//     allBlogPosts(first: $limit) {
//       title
//     }
//   }`;

export const getServerSideProps = async ({
    preview,
}: GetServerSidePropsContext) => {
    // const mweets = await request();
    return {
        props: {},
    };
};
