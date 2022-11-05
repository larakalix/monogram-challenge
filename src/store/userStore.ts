import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MagicUserMetadata } from "magic-sdk";
import { UserProps } from "types/data/user";

interface UserState {
    user: UserProps | null;
    isAuthenticated: boolean;
    setUser: (user: UserProps) => void;
}

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                isAuthenticated: false,
                setUser: (user) => {
                    set((state) => ({
                        ...state,
                        user,
                        isAuthenticated: true,
                    }));
                },
            }),
            {
                name: "user-storage",
            }
        )
    )
);
