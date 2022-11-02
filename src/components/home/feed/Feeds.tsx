import { Feed } from "./childs/Feed";
import { FeedProps } from "types/data/feed";

const feeds: FeedProps[] = [
    {
        id: "544",
        user: {
            name: "Floyd Miles",
            userName: "floydmiles",
            thumnbnail:
                "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
        },
        content:
            "Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.",
        createdAt: "Nov 1, 2021",
    },
    {
        id: "213",
        user: {
            name: "Floyd Miles",
            userName: "floydmiles",
            thumnbnail:
                "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
        },
        content:
            "Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.",
        createdAt: "Nov 1, 2021",
    },
    {
        id: "653",
        user: {
            name: "Josephine Smith",
            userName: "jsmith",
            thumnbnail:
                "https://www.datocms-assets.com/85254/1667345703-josephine.png",
        },
        content:
            "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis.",
        createdAt: "Oct 29, 2021",
    },
    {
        id: "998",
        user: {
            name: "Josephine Smith",
            userName: "jsmith",
            thumnbnail:
                "https://www.datocms-assets.com/85254/1667345703-josephine.png",
        },
        content:
            "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis.",
        createdAt: "Oct 29, 2021",
    },
];

export const Feeds = () => {
    return (
        <div className="w-full">
            {feeds.map(({ id, user, content, createdAt }) => (
                <Feed
                    key={id}
                    user={user}
                    content={content}
                    createdAt={createdAt}
                />
            ))}
        </div>
    );
};
