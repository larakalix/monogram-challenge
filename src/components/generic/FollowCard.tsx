import { UserProps } from "types/data/user";
import { User } from "./User";

export const FollowCard = ({
    id,
    name,
    lastname,
    username,
    email,
    thumbnail,
}: UserProps) => {
    const follow = (user: string) => {
        console.log(`Following @${user}`);
    };

    return (
        <div
            key={username}
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
                Follow
            </button>
        </div>
    );
};
