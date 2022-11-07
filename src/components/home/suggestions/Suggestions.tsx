import useSWR from "swr";
import { FollowCard, Title } from "@components/generic";
import { API_CONSTANTS } from "@constants/api";
import { useUserStore } from "@store/userStore";
import { UserProps } from "types/data/user";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Suggestions = () => {
    const { user, followings } = useUserStore((state) => state);
    const { data, error } = useSWR<{ suggestions: UserProps[] }>(
        `${API_CONSTANTS.suggestions}/${user?.id}`,
        fetcher
    );

    if (!data) return null;

    return (
        <div>
            <Title text="Follow others" type={1} />

            {data.suggestions?.map((follower) => {
                const isFollowing = followings?.includes(follower.id);
                return (
                    <FollowCard
                        key={follower?.username}
                        follower={follower}
                        isFollowing={isFollowing}
                    />
                );
            })}
        </div>
    );
};
