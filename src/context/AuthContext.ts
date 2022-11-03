import { AuthProps } from "types/data/user";
import { createContext } from "react";
import { MagicUserMetadata } from "magic-sdk";

export interface AuthContextProps {
    user: MagicUserMetadata | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    setUser(email: string): Promise<boolean>;
    logout(issuer: string): Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextProps);

export default AuthContext;
