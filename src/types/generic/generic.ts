export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
    U[keyof U];

export interface IGeneric {
    id: string;
}

export interface GenericHeadingProps {
    text: string;
    type: HeadingType;
}

export enum HeadingType {
    Title,
    Subtitle,
}
