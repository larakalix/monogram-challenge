import { Feed } from "./childs/Feed";
import { FeedProps } from "types/data/feed";

type Props = {
    feeds: FeedProps[];
};

export const Feeds = ({ feeds }: Props) => {
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
