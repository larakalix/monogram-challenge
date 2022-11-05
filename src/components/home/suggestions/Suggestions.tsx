import { Title, User } from "@components/generic";
import { UserProps } from "types/data/user";

const suggestions: UserProps[] = [
    {
        id: "3534634",
        name: "Floyd Miles",
        lastname: "Miles",
        email: "",
        username: "floydmiles",
        thumbnail: {
            url: "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
            basename: "floydmiles.png",
        },
    },
    {
        id: "65464574",
        name: "Josephine",
        lastname: "Smith",
        email: "",
        username: "jsmith",
        thumbnail: {
            url: "https://www.datocms-assets.com/85254/1667345703-josephine.png",
            basename: "josephine.png",
        },
    },
];

export const Suggestions = () => {
    const follow = (user: string) => {
        console.log(`Following @${user}`);
    };

    return (
        <div>
            <Title text="Follow others" type={1} />

            {suggestions.map(
                ({ id, name, lastname, username, email, thumbnail }) => (
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
                )
            )}
        </div>
    );
};
