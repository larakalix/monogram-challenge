import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FeedProps } from "types/data/feed";
import { getFeeds } from "@services/feedService";

interface FeedState {
    feeds: FeedProps[];
    getFeeds: () => void;
    setFeeds: (feeds: FeedProps[]) => void;
}

export const useFeedStore = create<FeedState>()(
    devtools(
        persist(
            (set) => ({
                feeds: [],
                getFeeds: async () => {
                    const feeds = await getFeeds();
                    set({ feeds });
                },
                setFeeds: (feeds) => {
                    set({ feeds });
                },
            }),
            {
                name: "feed-storage",
            }
        )
    )
);
