import { FollowCard, User } from '@components/generic'
import { useUserStore } from '@store/userStore'
import clsx from 'clsx'
import { FollowerProps } from 'types/data/follower'

type Props = {
    followed: FollowerProps[]
}

export const Followed = ({ followed }: Props) => {
    const { followings } = useUserStore((state) => state)
    if (!followed) return null

    return (
        <>
            {followed.map(({ follower }) => {
                if (!follower) return null

                const isFollowing = followings?.includes(follower.id)
                return (
                    <FollowCard
                        key={follower?.username}
                        follower={follower}
                        isFollowing={isFollowing}
                    />
                )
            })}
        </>
    )
}
