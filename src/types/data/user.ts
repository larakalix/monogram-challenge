import { IGeneric, IGenericWithTimestamps } from "types/generic/generic";
import { FollowerProps } from "./follower";

export interface AuthProps {
    email: string;
}

interface PersonalUserProps {
    name: string;
    lastname: string;
    username: string;
}

export interface GenericUserProps
    extends IGeneric,
        AuthProps,
        PersonalUserProps {}

export interface UserProps
    extends PersonalUserProps,
        AuthProps,
        IGenericWithTimestamps {
    authreference?: string;
    thumbnail: ThumbnailProps;
    followers?: FollowerProps[];
    issuer?: string;
    color?: Partial<ColorProps>;
}

export interface ColorProps {
    hex: string;
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export interface ThumbnailProps {
    url: string;
    basename: string;
}
