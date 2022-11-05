import { IGenericWithTimestamps } from "types/generic/generic";

export interface AuthProps {
    email: string;
}

export interface UserProps extends AuthProps, IGenericWithTimestamps {
    name: string;
    lastname: string;
    username: string;
    thumbnail: ThumbnailProps;
}

export interface ThumbnailProps {
    url: string;
    basename: string;
}
