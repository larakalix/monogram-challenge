import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { User } from "@components/generic";
import { NavItems } from "types/layout/layout";
import AuthContext from "context/AuthContext";

const links: NavItems[] = [
    { label: "Home", route: "/" },
    { label: "Following", route: "/following" },
    { label: "Your profile", route: "/profile" },
];

export const Layout = () => {
    const { push } = useRouter();
    const { user, logout } = useContext(AuthContext);
    const [toogle, setToogle] = useState(false);

    const handleLogout = async () => {
        const isLogout = await logout(user?.issuer!);
        if (isLogout) push("/auth");
    };

    const styles = clsx({
        ["left-0"]: toogle,
        ["left-[-15rem]"]: !toogle,
    });

    return (
        <div
            className={`bg-sidebar min-h-[100vh] w-[15rem] max-w-[20rem] p-5 border-r border-main-gray-border absolute md:fixed ${styles} md:left-0 transition-all`}
        >
            <button
                className="absolute right-[-2.5rem] cursor-pointer flex md:hidden"
                onClick={() => setToogle((state) => !state)}
            >
                {toogle ? (
                    <CgClose className="text-[1.5rem]" />
                ) : (
                    <CgMenuLeft className="text-[1.5rem]" />
                )}
            </button>

            <small>
                <Link
                    href={`/`}
                    passHref
                    className="text-main-blue text-[1.5rem] font-semibold"
                >
                    mweeter
                </Link>
            </small>

            <nav className="mt-7 border-b border-main-gray-border pb-4 mb-4">
                <ol className="space-y-4">
                    {links.map(({ label, route }) => (
                        <li key={`${label}-nav-item`}>
                            <Link
                                href={route}
                                passHref
                                className="bg-transparent text-link-gray text-[0.875rem] font-medium leading-[1.25rem] hover:bg-label-gray-active block w-full p-2 rounded-md"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li key={`logout-nav-item`}>
                        <button
                            className="bg-transparent text-link-gray text-[0.875rem] font-medium leading-[1.25rem] hover:bg-label-gray-active block w-full p-2 rounded-md text-start"
                            onClick={() => handleLogout()}
                        >
                            Log out
                        </button>
                    </li>
                </ol>
            </nav>

            <User
                name="Albert Flores"
                userName="aflores"
                thumnbnail="https://www.datocms-assets.com/85254/1667341417-albert.png"
            />
        </div>
    );
};
