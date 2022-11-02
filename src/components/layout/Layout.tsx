import { User } from "@components/generic/User";
import Link from "next/link";
import { NavItems } from "types/layout/layout";

const links: NavItems[] = [
    { label: "Home", route: "/" },
    { label: "Following", route: "/following" },
    { label: "Your profile", route: "/profile" },
];

export const Layout = () => {
    const logout = () => {
        console.log("Log out");
    };

    return (
        <div className="bg-sidebar min-h-[100vh] w-[15rem] max-w-[20rem] p-5 border-r border-main-gray-border fixed">
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
                            onClick={logout}
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
