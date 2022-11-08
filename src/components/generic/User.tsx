import { UserProps } from 'types/data/user'
import Image from 'next/image'

interface Props extends UserProps {
  onlyThumbnail?: boolean
}

export const User = ({
  name,
  lastname,
  username,
  thumbnail,
  onlyThumbnail = false,
}: Props) => {
  const resource = thumbnail
    ? thumbnail
    : {
        url: `https://api.multiavatar.com/${username}.png`,
        basename: 'username',
      }

  return (
    <div className="flex items-center justify-center">
      <div className="overflow-hidden rounded-full w-9 h-9">
        <Image
          src={resource.url}
          alt={resource.basename}
          width={36}
          height={36}
        />
      </div>

      {!onlyThumbnail && (
        <div className="flex flex-col ml-3">
          <span className="text-label-gray font-medium text-[0.875rem] leading-[1.25rem]">
            {name} {lastname}
          </span>
          <span className="text-sub-label-gray font-medium text-[0.75rem] leading-4">
            @{username}
          </span>
        </div>
      )}
    </div>
  )
}
