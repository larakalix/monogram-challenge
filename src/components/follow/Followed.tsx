import { User } from "@components/generic";
import { FollowerProps } from "types/data/follower";

type Props = {
    followed: FollowerProps[];
};

export const Followed = ({ followed }: Props) => {
    const follow = (user: string) => {
        console.log(`Following @${user}`);
    };

    return (
        <>
            {followed.map(({ follower }) => {
                if (!follower) return null;

                const { id, name, lastname, email, username, thumbnail } =
                    follower;

                return (
                    <div
                        key={follower?.username}
                        className="w-full flex justify-between items-center pt-4 pb-6 px-0 border-t border-main-gray-border"
                    >
                        <User
                            id={id}
                            name={name}
                            lastname={lastname}
                            email={email}
                            username={username}
                            thumbnail={thumbnail}
                        />

                        <button
                            className="border border-input-border rounded-full py-1 px-3 text-label-gray font-medium text-[0.875rem]"
                            onClick={() => follow(username)}
                        >
                            Unfollow
                        </button>
                    </div>
                );
            })}
        </>
    );
};
