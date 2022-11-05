import { Feed } from "./childs/Feed";
import { FeedProps } from "types/data/feed";
import { useFeedStore } from "@store/feedStore";

export const Feeds = () => {
    const { feeds } = useFeedStore((state) => state);

    return (
        <div className="w-full">
            {feeds.map(({ id, user, content, createdAt }) => (
                <Feed
                    key={id}
                    user={user}
                    content={content}
                    createdAt={createdAt}
                />
            ))}
        </div>
    );
};
