import { ViewContentWrapper } from "@components/generic/ViewContentWrapper";
import { Followed } from "@components/follow";
import { useFollowed } from "@hooks/index";

export const FollowPage = () => {
    const { followed, sliceIntoChunks } = useFollowed();

    return (
        <ViewContentWrapper title="People you follow">
            {sliceIntoChunks(followed, 4).map((followed) => (
                <div className="flex flex-col pr-0 lg:pr-20">
                    <Followed followed={followed} />
                </div>
            ))}
        </ViewContentWrapper>
    );
};
