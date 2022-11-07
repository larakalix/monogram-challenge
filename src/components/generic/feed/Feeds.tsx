import { Feed } from "./childs/Feed";
import { FeedProps } from "types/data/feed";
import { Loader } from "../Loader";

type Props = {
    feeds: FeedProps[];
};

export const Feeds = ({ feeds }: Props) => {
    if (!feeds) return <Loader />;

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
