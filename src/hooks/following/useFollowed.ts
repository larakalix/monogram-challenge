import { UserProps } from "types/data/user";

export const useFollowed = () => {
    const sliceIntoChunks = (collection: UserProps[], size: number) => {
        const res = [];
        for (let i = 0; i < collection.length; i += size)
            res.push(collection.slice(i, i + size));

        return res;
    };

    return { sliceIntoChunks };
};
