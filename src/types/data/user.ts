import { IGenericWithTimestamps } from "types/generic/generic";
import { FollowerProps } from "./follower";

export interface AuthProps {
    email: string;
}

export interface UserProps extends AuthProps, IGenericWithTimestamps {
    name: string;
    lastname: string;
    username: string;
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
