import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { UserProps } from 'types/data/user'
import { User } from '../User'
import { useFollowCard } from '@hooks/following/useFollowCard'

type Props = {
    follower: UserProps
    isFollowing: boolean
}

export const FollowCard = ({ follower, isFollowing }: Props) => {
    const { handleClick } = useFollowCard()
    const [state, setState] = useState({
        isLoading: false,
    })

    const handleState = (isLoading: boolean) =>
        setState((prev) => ({ ...prev, isLoading }))

    if (!follower) return null

    const styles = clsx({
        ['bg-transparent text-label-gray']: isFollowing,
        ['bg-primary-button text-white']: !isFollowing,
    })

    return (
        <div
            key={follower.username}
            className="w-full flex justify-between items-center pt-4 pb-6 px-0 border-t border-main-gray-border"
        >
            <Link href={`/${follower.username}`}>
                <User
                    id={follower.id}
                    name={follower.name}
                    lastname={follower.lastname}
                    email={follower.email}
                    username={follower.username}
                    thumbnail={follower.thumbnail}
                />
            </Link>

            <button
                className={`border border-input-border rounded-md py-1 px-3 ${styles} font-medium text-[0.875rem] min-w-[6rem] disabled:opacity-25`}
                disabled={state.isLoading}
                onClick={() =>
                    handleClick({
                        follower: follower.id,
                        isFollowing,
                        handleState,
                    })
                }
            >
                {isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    )
}
