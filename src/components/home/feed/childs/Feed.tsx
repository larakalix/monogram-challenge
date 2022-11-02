import { User } from "@components/generic/User";
import { FeedProps } from "types/data/feed";

export const Feed = ({ user, content, createdAt }: Omit<FeedProps, "id">) => {
    return (
        <div className="flex items-start w-full mb-10">
            <User
                name={user.name}
                userName={user.userName}
                thumnbnail={user.thumnbnail}
                onlyThumbnail
            />

            <div className="w-full ml-3 flex flex-col">
                <h3 className="text-main-black font-medium text-[0.875rem] leading-[1.25rem] space-x-2">
                    <span>{user.name}</span>
                    <span className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem]">
                        @{user.userName}
                    </span>
                    <span className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem]">
                        {createdAt}
                    </span>
                </h3>
                <p className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem] mt-2">
                    {content}
                </p>
            </div>
        </div>
    );
};
