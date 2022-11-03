import { Title, User } from "@components/generic";
import { UserProps } from "types/data/user";

const suggestions: UserProps[] = [
    {
        name: "Floyd Miles",
        userName: "floydmiles",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
    },
    {
        name: "Josephine Smith",
        userName: "jsmith",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
];

export const Suggestions = () => {
    const follow = (user: string) => {
        console.log(`Following @${user}`);
    };

    return (
        <div>
            <Title text="Follow others" type={1} />

            {suggestions.map(({ name, userName, thumnbnail }) => (
                <div
                    key={userName}
                    className="w-full flex justify-between items-center pt-4 pb-6 px-0 border-t border-main-gray-border"
                >
                    <User
                        name={name}
                        userName={userName}
                        thumnbnail={thumnbnail}
                    />

                    <button
                        className="border border-input-border rounded-full py-1 px-3 text-label-gray font-medium text-[0.875rem]"
                        onClick={() => follow(userName)}
                    >
                        Follow
                    </button>
                </div>
            ))}
        </div>
    );
};
