import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

type Props = { children: JSX.Element | JSX.Element[] };

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user || null, isAuthenticated: !!data?.user };
        });

export const AuthGuard = ({ children }: Props) => {
    const { data, error } = useSWR("/api/user", fetcher);
    const user = data?.user;
    const finished = Boolean(data);
    const hasUser = Boolean(user);

    useEffect(() => {
        if (!finished) return;

        if (!hasUser || error) {
            Router.push("/");
            return;
        } else {
            Router.push("/home");
        }
    }, [finished, hasUser]);

    return <>{children}</>;
};
