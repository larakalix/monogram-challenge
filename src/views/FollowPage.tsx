import { Loader, ViewContentWrapper } from "@components/generic";
import { Followed } from "@components/follow";
import { useFollowed } from "@hooks/index";
import { useUserStore } from "@store/userStore";

export const FollowPage = () => {
    const { user } = useUserStore((state) => state);
    const { sliceIntoChunks } = useFollowed();

    if (!user?.followers) return <Loader />;

    return (
        <ViewContentWrapper title="People you follow">
            {sliceIntoChunks(user.followers, 4).map((followed, index) => (
                <div
                    key={`row_${index}`}
                    className="flex flex-col pr-0 lg:pr-20"
                >
                    <Followed followed={followed} />
                </div>
            ))}
        </ViewContentWrapper>
    );
};
