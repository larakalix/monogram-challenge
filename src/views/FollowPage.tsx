import useSWR from 'swr'
import { Loader, ViewContentWrapper } from '@components/generic'
import { Followed } from '@components/follow'
import { useFollowed } from '@hooks/index'
import { useUserStore } from '@store/userStore'
import { FollowerProps } from 'types/data/follower'
import { API_CONSTANTS } from '@constants/api'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const FollowPage = () => {
    const { user } = useUserStore((state) => state)
    const { data, error } = useSWR<{ followers: FollowerProps[] }>(
        user ? `${API_CONSTANTS.followers}/${user?.id}` : null,
        fetcher
    )
    const { sliceIntoChunks } = useFollowed()

    if (!data) return null

    return (
        <ViewContentWrapper title="People you follow">
            {data?.followers?.length > 0 ? (
                sliceIntoChunks(data.followers, 4).map((followed, index) => (
                    <div
                        key={`row_${index}`}
                        className="flex flex-col pr-0 lg:pr-20"
                    >
                        <Followed followed={followed} />
                    </div>
                ))
            ) : (
                <div>
                    <h1 className="text-label-gray">
                        You are not following anyone yet.
                    </h1>
                </div>
            )}
        </ViewContentWrapper>
    )
}
