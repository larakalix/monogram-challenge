import { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { getFeeds } from "@services/feedService";
import { FeedProps } from "types/data/feed";
import { HomePage } from "@views/HomePage";
import { useFeedStore } from "@store/feedStore";

interface Props {
    feeds: FeedProps[];
}

export default function Home({ feeds }: Props) {
    const { setFeeds } = useFeedStore((state) => state);

    useEffect(() => {
        setFeeds(feeds);
    }, []);

    return <HomePage />;
}

export const getServerSideProps = async ({
    preview,
}: GetServerSidePropsContext) => {
    let feeds = await getFeeds();

    return { props: { feeds } };
};
