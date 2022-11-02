import { UserProps } from "types/data/user";

const followed: UserProps[] = [
    {
        name: "Swapnll Dwivedi",
        userName: "sdwiv",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
    },
    {
        name: "Esther Howard",
        userName: "ehow",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
    {
        name: "Guy Hawkins",
        userName: "guyhaw",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
    {
        name: "Robert Fox",
        userName: "rfox",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
    {
        name: "James Down",
        userName: "jdown",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667344987-floydmiles.png",
    },
    {
        name: "Kristin Watson",
        userName: "kwatson",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
    {
        name: "Ralph Edwards",
        userName: "redw",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
    {
        name: "Darlene Robertson",
        userName: "robertson",
        thumnbnail:
            "https://www.datocms-assets.com/85254/1667345703-josephine.png",
    },
];

export const useFollowed = () => {
    const sliceIntoChunks = (collection: UserProps[], size: number) => {
        const res = [];
        for (let i = 0; i < collection.length; i += size)
            res.push(collection.slice(i, i + size));

        return res;
    };

    return { followed, sliceIntoChunks };
};
