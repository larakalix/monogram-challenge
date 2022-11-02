import { IGeneric } from "types/generic/generic";
import { UserProps } from "./user";

export interface FeedProps extends IGeneric {
    content: string;
    user: UserProps;
    createdAt: string;
}
