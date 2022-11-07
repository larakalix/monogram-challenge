import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FeedProps } from "types/data/feed";
import { FeedQueryType } from "types/services/feed";
import { getFeeds } from "@services/feedService";

interface FeedState {
    feeds: FeedProps[];
    setFeeds: (feeds: FeedProps[]) => void;
    getFeeds: () => void;
}

export const useFeedStore = create<FeedState>()(
    devtools(
        persist(
            (set) => ({
                feeds: [],
                setFeeds: (feeds) => {
                    set({ feeds });
                },
                getFeeds: async () => {
                    const feeds = await getFeeds("", FeedQueryType.ALL_FEEDS);
                    set({ feeds });
                },
            }),
            {
                name: "feed-storage",
            }
        )
    )
);
