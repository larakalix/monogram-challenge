import { User } from "@components/generic";
import { UserProps } from "types/data/user";

export const UserBadge = ({ user }: { user: UserProps }) => {
    return (
        <div
            style={{
                backgroundColor: user.color?.hex,
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
    );
};
