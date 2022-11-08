import { useFollowCard } from '@hooks/following/useFollowCard'
import clsx from 'clsx'
import { useState } from 'react'
import { UserProps } from 'types/data/user'

type Props = {
    user: UserProps
    isFollowing: boolean
    isSameUser: boolean
}

export const UserPanel = ({ user, isFollowing, isSameUser }: Props) => {
    const { handleClick } = useFollowCard()
    const [state, setState] = useState({
        isLoading: false,
    })

    const styles = clsx({
        ['bg-transparent text-label-gray']: isFollowing,
        ['bg-primary-button text-white']: !isFollowing,
    })

    const handleState = (isLoading: boolean) =>
        setState((prev) => ({ ...prev, isLoading }))

    return (
        <div className="flex flex-col items-start justify-center w-full mt-8">
            <div className="flex items-center justify-between w-full flex-col md:flex-row">
                <h1 className="text-label-gray font-medium text-[1.5rem] leading-[1.25rem]">
                    {user.name} {user.lastname}
                    {process.env.NEXT_ENV === 'dev' ? (
                        <span className="text-sub-label-gray font-medium text-[0.6rem] leading-4 block mt-2">
                            {user.id}
                        </span>
                    ) : null}
                </h1>
                {!isSameUser && (
                    <button
                        className={`border border-input-border rounded-md py-1 px-3 ${styles} font-medium text-[0.875rem] min-w-[6rem] disabled:opacity-25 mt-4 md:mt-0`}
                        disabled={state.isLoading}
                        onClick={() =>
                            handleClick({
                                follower: user.id,
                                isFollowing,
                                handleState,
                            })
                        }
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                )}
            </div>

            <ul className="space-x-4 mt-4">
                <li className="text-sub-label-gray">
                    <span className="font-bold text-label-gray">
                        {user.followers?.length}
                    </span>{' '}
                    Following
                </li>
            </ul>
        </div>
    )
}
