import Link from "next/link";
import { UserProps } from "types/data/user";

type Props = {
    username: string;
    redirectTo: boolean;
    children: JSX.Element | JSX.Element[];
};

export const RedirectTo = ({ username, redirectTo, children }: Props) => {
    if (redirectTo) {
        return <div>{children}</div>;
    }

    return <Link href={`/${username}`}>{children}</Link>;
};
