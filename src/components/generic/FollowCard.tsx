import { UserProps } from "types/data/user";
import { User } from "./User";

export const FollowCard = ({ name, userName, thumnbnail }: UserProps) => {
    const follow = (user: string) => {
        console.log(`Following @${user}`);
    };

    return (
        <div
            key={userName}
            className="w-full flex justify-between items-center pt-4 pb-6 px-0 border-t border-main-gray-border"
        >
            <User name={name} userName={userName} thumnbnail={thumnbnail} />

            <button
                className="border border-input-border rounded-full py-1 px-3 text-label-gray font-medium text-[0.875rem]"
                onClick={() => follow(userName)}
            >
                Follow
            </button>
        </div>
    );
};
