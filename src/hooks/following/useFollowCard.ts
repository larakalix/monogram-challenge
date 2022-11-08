import { API_CONSTANTS } from '@constants/api'
import { useUserStore } from '@store/userStore'

type Props = {
    follower: string
    isFollowing: boolean
    handleState: (isLoading: boolean) => void
}

export const useFollowCard = () => {
    const { user, followings, setFollowings } = useUserStore((state) => state)

    const follow = ({ follower, handleState }: Omit<Props, 'isFollowing'>) => {
        fetch(`${API_CONSTANTS.follow}`, {
            method: 'POST',
            body: JSON.stringify({ follower, user }),
        })
            .then((res) => res.json())
            .then(({ following }) => {
                handleState(false)
                setFollowings(
                    following
                        ? [follower, ...followings]
                        : [...followings.filter((f) => f !== follower)]
                )
            })
    }

    const handleClick = ({ follower, handleState }: Props) => {
        handleState(true)
        follow({
            follower,
            handleState,
        })
    }

    return {
        follow,
        handleClick,
    }
}
