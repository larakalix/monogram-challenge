import useSWR from "swr";
import { API_CONSTANTS } from "@constants/api";
import { Loader, ViewContentWrapper } from "@components/generic";
import { FeedInput, Feeds } from "@components/home";
import { UserBadge, UserPanel } from "@components/summary";
import { ViewWrappperColSplitType } from "types/generic/generic";
import { FollowerProps } from "types/data/follower";
import { Followed } from "@components/follow";
import { useUserStore } from "@store/userStore";
import { kFormatter } from "helpers/string";

type Props = {
    username: string | string[];
};

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user, feeds: data?.feeds };
        });

export const UserSummaryPage = ({ username }: Props) => {
    const { user: currentUser } = useUserStore((state) => state);
    const { data, error } = useSWR(
        `${API_CONSTANTS.profile}/${username}`,
        fetcher
    );

    if (!data) return <Loader />;

    const { user, feeds } = data;

    return (
        <ViewContentWrapper
            title={`${user.username}`}
            subtitle={`${kFormatter(feeds.length)} ${
                feeds.length === 1 ? "Mweet" : "Mweets"
            }`}
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            <div className="flex flex-col">
                <UserBadge user={user} />

                <UserPanel user={user} />

                <div className="mt-4 pt-4 md:mt-8 md:pt-8 border-t border-main-gray-border">
                    {user.username === currentUser?.username && <FeedInput />}
                    <Feeds feeds={feeds} />
                </div>
            </div>

            <div className="flex flex-col">
                <Followed followed={user.followers as FollowerProps[]} />
            </div>
        </ViewContentWrapper>
    );
};
