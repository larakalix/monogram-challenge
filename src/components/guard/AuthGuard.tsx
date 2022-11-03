import AuthContext from "context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";

type Props = { children: JSX.Element | JSX.Element[] };

export const AuthGuard = ({ children }: Props) => {
    const router = useRouter();
    const { isAuthenticated, setUser } = useContext(AuthContext);
    const publicPaths = ["/auth"];

    useEffect(() => {
        authCheck(router.asPath);
        // const hideContent = () => setUser({} as any);
        // router.events.on("routeChangeStart", hideContent);

        // router.events.on("routeChangeComplete", authCheck);

        // return () => {
        //     router.events.off("routeChangeStart", hideContent);
        //     router.events.off("routeChangeComplete", authCheck);
        // };
    }, []);

    const authCheck = async (url: string) => {
        // redirect to login page if accessing a private page and not logged in
        // const path = url.split("?")[0];
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY!);

        const isLoggedIn = await magic.user.isLoggedIn();
        console.log("isLoggedIn", isLoggedIn);

        if (!isLoggedIn) {
            router.push("/auth");
        } else {
            const { email } = await magic.user.getMetadata();
            setUser(email!);
            router.push("/");
        }
    };

    if (publicPaths.includes(router.asPath)) return <>{children}</>;

    return <>{isAuthenticated && children}</>;
};
