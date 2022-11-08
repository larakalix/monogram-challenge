import { Loader } from '@components/generic'
import { FeedProps } from 'types/data/feed'
import { Feeds } from '..'

export const HomeFeeds = ({
  data,
}: {
  data:
    | {
        feeds: FeedProps[]
      }
    | undefined
}) => {
  if (!data) return null

  const { feeds } = data

  return <Feeds feeds={feeds} />
}
