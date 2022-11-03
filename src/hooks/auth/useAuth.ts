import { useState } from "react";
import { Magic, MagicUserMetadata } from "magic-sdk";

type Props = {
    user: MagicUserMetadata | null;
    isAuthenticated: boolean;
    isLoading: boolean;
};

export const useAuth = () => {
    const [auth, setAuth] = useState<Props>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
    });

    const setUser = async (email: string) => {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY!);
        const didToken = await magic.auth.loginWithMagicLink({
            email,
        });

        if (!email) return false;

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${didToken}`,
            },
        });

        if (res.status !== 200) {
            setAuth({
                user: null,
                isAuthenticated: false,
                isLoading: false,
            });
            return false;
        }

        if (res.status === 200) {
            await magic.user.getMetadata().then((user) => {
                setAuth({
                    user,
                    isAuthenticated: true,
                    isLoading: false,
                });
            });
        }

        return res.status === 200;
    };

    const logout = async (issuer: string) => {
        const res = await fetch("/api/logout", {
            method: "POST",
            body: JSON.stringify({ issuer }),
        });

        if (res.status === 200)
            setAuth({ user: null, isAuthenticated: false, isLoading: false });

        return res.status === 200;
    };

    return { ...auth, setUser, logout };
};
