import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserProps } from "types/data/user";

interface Props extends UserProps {
    issuer?: string;
}

interface UserState {
    user: Props | null;
    isAuthenticated: boolean;
    setUser: (user: Props) => void;
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
