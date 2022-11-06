import useSWR from "swr";
import { API_CONSTANTS } from "@constants/api";
import { Loader, User, ViewContentWrapper } from "@components/generic";
import { FeedInput, Feeds } from "@components/home";
import { kFormatter } from "helpers/string";

type Props = {
    username: string | string[];
};

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user, feeds: data?.feeds };
        });

export const UserSummaryPage = ({ username }: Props) => {
    const { data, error } = useSWR(
        `${API_CONSTANTS.profile}/${username}`,
        fetcher
    );

    if (!data) return <Loader />;

    const { user, feeds } = data;

    return (
        <ViewContentWrapper
            title={`${user.username}`}
            subtitle={`${kFormatter(feeds.length)} ${
                feeds.length === 1 ? "Mweet" : "Mweets"
            }`}
        >
            <div className="flex flex-col">
                <div
                    style={{
                        backgroundColor: user.color.hex,
                    }}
                    className="rounded-sm relative w-full flex min-h-[5rem]"
                >
                    <div className="absolute bottom-[-1rem] left-[1rem]">
                        <User
                            id={user.id}
                            name={user.name}
                            lastname={user.lastname}
                            username={user.username}
                            thumbnail={user.thumbnail}
                            email={user.email}
                            onlyThumbnail
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start justify-center w-full mt-8">
                    <h1 className="text-label-gray font-medium text-[1.5rem] leading-[1.25rem]">
                        {user.name} {user.lastname}
                    </h1>

                    <ul className="space-x-4 mt-4">
                        <li className="text-sub-label-gray">
                            <span className="font-bold text-label-gray">
                                {user.followers.length}
                            </span>{" "}
                            Followers
                        </li>
                    </ul>
                </div>

                <div className="mt-4 pt-4 md:mt-8 md:pt-8 border-t border-main-gray-border">
                    <FeedInput />
                    <Feeds feeds={feeds} />
                </div>
            </div>
        </ViewContentWrapper>
    );
};
