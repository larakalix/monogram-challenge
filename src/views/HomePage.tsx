import useSWR from "swr";
import { Loader, ViewContentWrapper } from "@components/generic";
import { FeedInput, Feeds, Suggestions } from "@components/home";
import { FeedProps } from "types/data/feed";
import { ViewWrappperColSplitType } from "types/generic/generic";
import { API_CONSTANTS } from "@constants/api";

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { feeds: data?.feeds };
        });

export const HomePage = () => {
    const { data, error } = useSWR<{ feeds: FeedProps[] }>(
        API_CONSTANTS.feeds,
        fetcher
    );

    if (!data) return <Loader />;

    const { feeds } = data;

    return (
        <ViewContentWrapper
            title="Your feed"
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            <div className="flex flex-col pr-0 lg:pr-20">
                <FeedInput />

                <Feeds feeds={feeds} />
            </div>

            <div className="flex flex-col">
                <Suggestions />
            </div>
        </ViewContentWrapper>
    );
};
