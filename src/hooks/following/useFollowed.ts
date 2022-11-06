import { FollowerProps } from "types/data/follower";

export const useFollowed = () => {
    const sliceIntoChunks = (collection: FollowerProps[], size: number) => {
        if (collection?.length || collection?.length <= size)
            return [[...collection]];

        const chunks = [];
        for (let i = 0; i < collection.length; i += size)
            chunks.push(collection.slice(i, i + size));

        return chunks;
    };

    return { sliceIntoChunks };
};
