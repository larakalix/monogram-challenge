import useSWR, { useSWRConfig } from "swr";
import { ViewContentWrapper } from "@components/generic";
import { FeedInput, Suggestions } from "@components/home";
import { FeedProps } from "types/data/feed";
import { ViewWrappperColSplitType } from "types/generic/generic";
import { API_CONSTANTS } from "@constants/api";
import { HomeFeeds } from "@components/home/homeFeeds/HomeFeeds";

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { feeds: data?.feeds };
        });

export const HomePage = () => {
    const { mutate } = useSWRConfig();
    const { data, error } = useSWR<{ feeds: FeedProps[] }>(
        API_CONSTANTS.feeds,
        fetcher,
        {
            revalidateOnFocus: true,
        }
    );

    const refreshFeeds = () => {
        mutate(API_CONSTANTS.feeds);
    };

    return (
        <ViewContentWrapper
            title="Your feed"
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            <div className="flex flex-col pr-0 lg:pr-20">
                <FeedInput refreshFeeds={refreshFeeds} />

                <HomeFeeds data={data} />
            </div>

            <div className="flex flex-col">
                <Suggestions />
            </div>
        </ViewContentWrapper>
    );
};
