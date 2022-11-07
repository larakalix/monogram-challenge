import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { useUserStore } from "@store/userStore";
import { API_CONSTANTS } from "@constants/api";
import { FollowerProps } from "types/data/follower";
import { useUser } from "@auth0/nextjs-auth0";

type Props = { children: JSX.Element | JSX.Element[] };

const fetcher = (url: string, options: any) =>
    fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user };
        });

export const AuthGuard = ({ children }: Props) => {
    const { user, isLoading } = useUser();
    const payload = {
        method: "POST",
        body: JSON.stringify(user),
    };
    const { setUser } = useUserStore((state) => state);
    const { data, error } = useSWR(
        user ? [API_CONSTANTS.user, payload] : null,
        fetcher
    );

    const finished = Boolean(data);
    const hasUser = Boolean(data?.user && Object.keys(data?.user).length > 0);

    useEffect(() => {
        if (!finished) return;

        if (!user || !hasUser || !!error) {
            Router.push("/");
            return;
        } else {
            const followings = data?.user?.followers.map(
                ({ follower }: { follower: FollowerProps }) => follower.id
            );
            setUser(data?.user, followings);

            if (["/"].includes(Router.asPath)) Router.push("/home");
        }
    }, [finished, hasUser]);

    return <>{children}</>;
};
