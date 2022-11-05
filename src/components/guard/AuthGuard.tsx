import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { useUserStore } from "@store/userStore";
import { getUser } from "@services/userService";
import { MagicUserMetadata } from "magic-sdk";

type Props = { children: JSX.Element | JSX.Element[] };

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user || null, isAuthenticated: !!data?.user };
        });

export const AuthGuard = ({ children }: Props) => {
    const { setUser } = useUserStore((state) => state);
    const { data, error } = useSWR("/api/user", fetcher);
    const user = data?.user;
    const finished = Boolean(data);
    const hasUser = Boolean(user);

    useEffect(() => {
        const getUserAsync = async (user: MagicUserMetadata) => {
            const current = await getUser(String(user.issuer));
            setUser(current);
            Router.push("/home");
        };

        if (!finished) return;

        if (!hasUser || error) {
            Router.push("/");
            return;
        } else {
            getUserAsync(user);
        }
    }, [finished, hasUser]);

    return <>{children}</>;
};
