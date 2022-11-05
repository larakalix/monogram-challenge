import { ViewContentWrapper } from "@components/generic";
import { Followed } from "@components/follow";
import { useFollowed } from "@hooks/index";
import { UserProps } from "types/data/user";

export const FollowPage = ({ followed }: { followed: UserProps[] }) => {
    const { sliceIntoChunks } = useFollowed();

    return (
        <ViewContentWrapper title="People you follow">
            {sliceIntoChunks(followed, 4).map((followed, index) => (
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
