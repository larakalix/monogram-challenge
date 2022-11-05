import { GetServerSidePropsContext } from "next";
import { FollowPage } from "@views/FollowPage";
import { getFolloweds } from "@services/followedService";
import { UserProps } from "types/data/user";

export default function Following({ followed }: { followed: UserProps[] }) {
    return (
        <>
            <FollowPage followed={followed} />
        </>
    );
}

export const getServerSideProps = async ({
    preview,
}: GetServerSidePropsContext) => {
    let followed = await getFolloweds();

    return { props: { followed } };
};
