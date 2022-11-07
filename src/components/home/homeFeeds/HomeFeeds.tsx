import { Loader } from "@components/generic";
import { FeedProps } from "types/data/feed";
import { Feeds } from "..";

export const HomeFeeds = ({
    data,
}: {
    data:
        | {
              feeds: FeedProps[];
          }
        | undefined;
}) => {
    if (!data)
        return (
            <div className="h-[20rem]">
                <Loader cover={false} />
            </div>
        );

    const { feeds } = data;

    return <Feeds feeds={feeds} />;
};
