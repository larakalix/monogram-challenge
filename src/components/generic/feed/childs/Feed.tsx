import Router from "next/router";
import Link from "next/link";
import { format, formatDistance } from "date-fns";
import { User } from "@components/generic";
import { FeedProps } from "types/data/feed";
import { FeedContent } from "./FeedContent";
import { RedirectTo } from "./RedirectTo";

export const Feed = ({ user, content, createdAt }: Omit<FeedProps, "id">) => {
    const getDistanceFromNow = () => {
        const date = formatDistance(new Date(createdAt), new Date());

        return `${date.charAt(0).toUpperCase()}${date.slice(1)}`;
    };

    const redirectTo = Router.asPath.replace("/", "") === `${user.username}`;

    return (
        <div className="flex items-start w-full mb-10">
            <RedirectTo username={user.username} redirectTo={redirectTo}>
                <User
                    id={user.id}
                    name={user.name}
                    lastname={user.lastname}
                    email={user.email}
                    username={user.username}
                    thumbnail={user.thumbnail}
                    onlyThumbnail
                />
            </RedirectTo>

            <div className="w-full ml-3 flex flex-col">
                <RedirectTo username={user.username} redirectTo={redirectTo}>
                    <h3 className="text-main-black font-medium text-[0.875rem] leading-[1.25rem] space-x-2">
                        <span>{user.name}</span>
                        <span className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem]">
                            @{user.username}
                        </span>
                        <span className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem]">
                            {format(new Date(createdAt), "PP")} -{" "}
                            {getDistanceFromNow()}
                        </span>
                    </h3>
                </RedirectTo>

                <FeedContent content={content} />
            </div>
        </div>
    );
};
