import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MagicUserMetadata } from "magic-sdk";

interface UserState {
    user: MagicUserMetadata | null;
    isAuthenticated: boolean;
    setUser: (user: MagicUserMetadata) => void;
}

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                isAuthenticated: false,
                setUser: (user) => {
                    set((state) => ({ ...state, user, isAuthenticated: true }));
                },
            }),
            {
                name: "user-storage",
            }
        )
    )
);
