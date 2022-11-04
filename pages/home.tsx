import { HomePage } from "@views/HomePage";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";

export default function Home({}: InferGetStaticPropsType<
    typeof getServerSideProps
>) {
    return (
        <>
            <HomePage />
        </>
    );
}

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    allBlogPosts(first: $limit) {
      title
    }
  }`;

export const getServerSideProps = async ({
    preview,
}: GetServerSidePropsContext) => {
    return {
        props: {},
    };
};
