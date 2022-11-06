import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import clsx from "clsx";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { User } from "@components/generic";
import { NavItems } from "types/layout/layout";
import { API_CONSTANTS } from "@constants/api";
import { useUserStore } from "@store/userStore";
import { APP_ROUTES } from "@constants/routes";

const links: NavItems[] = [
    { label: "Home", route: "/home" },
    { label: "Following", route: "/following" },
    { label: "Your profile", route: "/profile" },
];

export const Layout = () => {
    const [toogle, setToogle] = useState(false);
    const { user } = useUserStore((state) => state);

    const handleLogout = async () => {
        const isOut = await fetch(API_CONSTANTS.logout, { method: "POST" });
        if (isOut.status === 302) Router.push(APP_ROUTES.home);
    };

    const styles = clsx({
        ["left-0"]: toogle,
        ["left-[-15rem]"]: !toogle,
    });

    return (
        <div
            className={`bg-sidebar min-h-[100vh] w-[15rem] max-w-[20rem] p-5 border-r border-main-gray-border absolute md:fixed ${styles} md:left-0 transition-all z-10`}
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

            {user && (
                <User
                    id={user.id}
                    name={user.name}
                    lastname={user.lastname}
                    email={user.email}
                    username={user.username}
                    thumbnail={user.thumbnail}
                />
            )}
        </div>
    );
};
