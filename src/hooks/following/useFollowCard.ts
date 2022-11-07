import { API_CONSTANTS } from "@constants/api";
import { useUserStore } from "@store/userStore";

type Props = {
    follower: string;
    isFollowing: boolean;
    handleState: (isFollowing: boolean, isLoading: boolean) => void;
};

export const useFollowCard = () => {
    const { user } = useUserStore((state) => state);

    const follow = ({ follower, handleState }: Omit<Props, "isFollowing">) => {
        fetch(`${API_CONSTANTS.follow}`, {
            method: "POST",
            body: JSON.stringify({ follower, user }),
        })
            .then((res) => res.json())
            .then(({ following }) => {
                console.log("useFollowCard__follow", following);
                handleState(following, false);
            });
    };

    const handleClick = ({ follower, isFollowing, handleState }: Props) => {
        handleState(isFollowing, true);
        follow({
            follower,
            handleState,
        });
    };

    return {
        follow,
        handleClick,
    };
};
