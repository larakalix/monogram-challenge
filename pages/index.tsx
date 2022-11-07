import Link from "next/link";
import { useRouter } from "next/router";
import { ImTwitter as ImMweeter } from "react-icons/im";
import { FormField } from "types/data/formField";

type InputProps = {
    email: string;
};

const initialValues: InputProps = {
    email: "",
};

const formFields: FormField[] = [{ label: "Email address", name: "email" }];

export default function Index() {
    // const { user, error, isLoading } = useUser();
    const { push } = useRouter();

    return (
        <section className="flex items-center justify-center flex-col h-screen">
            <ImMweeter className="w-12 h-12 text-main-blue" />
            <h1 className="text-heading-gray font-extrabold text-[1.5rem] leading-[1.65rem] mt-2">
                mweeter
            </h1>

            <div className="mt-4 p-2 text-center max-w-sm w-full">
                <Link
                    href="/api/auth/login"
                    passHref
                    className="bg-primary-button text-white rounded-md py-[0.813rem] px-[1.969rem] mt-4 w-full"
                >
                    Login
                </Link>
            </div>
        </section>
    );
}
