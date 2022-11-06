import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FeedProps } from "types/data/feed";

interface FeedState {
    feeds: FeedProps[];
    setFeeds: (feeds: FeedProps[]) => void;
}

export const useFeedStore = create<FeedState>()(
    devtools(
        persist(
            (set) => ({
                feeds: [],
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
