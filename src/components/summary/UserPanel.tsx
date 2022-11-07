import { UserProps } from "types/data/user";

export const UserPanel = ({ user }: { user: UserProps }) => {
    return (
        <div className="flex flex-col items-start justify-center w-full mt-8">
            <h1 className="text-label-gray font-medium text-[1.5rem] leading-[1.25rem]">
                {user.name} {user.lastname}
            </h1>

            <ul className="space-x-4 mt-4">
                <li className="text-sub-label-gray">
                    <span className="font-bold text-label-gray">
                        {user.followers?.length}
                    </span>{" "}
                    Followers
                </li>
            </ul>
        </div>
    );
};
