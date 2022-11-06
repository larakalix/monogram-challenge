import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { useUserStore } from "@store/userStore";
import { API_CONSTANTS } from "@constants/api";

type Props = { children: JSX.Element | JSX.Element[] };

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return { user: data?.user };
        });

export const AuthGuard = ({ children }: Props) => {
    const { setUser } = useUserStore((state) => state);
    const { data, error } = useSWR(API_CONSTANTS.user, fetcher);
    const finished = Boolean(data);
    const hasUser = Boolean(data?.user);

    useEffect(() => {
        if (!finished) return;

        if (!hasUser || error) {
            Router.push("/");
            return;
        } else {
            setUser(data?.user);

            if (["/"].includes(Router.asPath)) Router.push("/home");
        }
    }, [finished, hasUser]);

    return <>{children}</>;
};
