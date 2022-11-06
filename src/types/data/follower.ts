import { IGeneric } from "types/generic/generic";
import { UserProps } from "./user";

export interface FollowerProps extends IGeneric {
    authreference: string;
    follower?: UserProps;
    user?: UserProps;
}
