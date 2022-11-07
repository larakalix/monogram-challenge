import { API_CONSTANTS } from "@constants/api";
import { useUserStore } from "@store/userStore";

export const useFollowCard = () => {
    const { user } = useUserStore((state) => state);

    const follow = (follower: string, isFollowing: boolean) => {
        fetch(`${API_CONSTANTS.follow}`, {
            method: "POST",
            body: JSON.stringify({ follower, user }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("useFollowCard__follow", data);
            });
    };

    return {
        follow,
    };
};
