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
    }, []);

    const authCheck = async (url: string) => {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY!);
        const isLoggedIn = await magic.user.isLoggedIn();

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
