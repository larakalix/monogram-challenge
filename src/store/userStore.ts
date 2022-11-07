import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserProps } from "types/data/user";

interface Props extends UserProps {
    issuer?: string;
}

interface UserState {
    user: Props | null;
    followings: string[];
    isAuthenticated: boolean;
    setUser: (user: Props, followings: string[]) => void;
    setFollowings: (followings: string[]) => void;
}

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                followings: [],
                isAuthenticated: false,
                setUser: (user, followings) => {
                    set((state) => ({
                        ...state,
                        user,
                        followings,
                        isAuthenticated: true,
                    }));
                },
                setFollowings: (followings: string[]) => {
                    set((state) => ({
                        ...state,
                        followings,
                    }));
                },
            }),
            {
                name: "user-storage",
            }
        )
    )
);
