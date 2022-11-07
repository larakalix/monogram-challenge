import Link from "next/link";

type Props = {
    email: string;
};

export const Advice = ({ email }: Props) => {
    return (
        <div className="flex items-start flex-col justify-center w-full border border-input-border rounded-md p-4 mb-4 bg-white">
            <p className="text-label-gray mb-4 text-[.9rem]">
                Hello <span className="font-medium">{email}</span>! Nice to have
                you on board! 🥳
            </p>
            <p className="text-label-gray mb-6 text-[.9rem]">
                We want you to have the best experience ever here, therefore we
                are able to help you to improve your profile!
            </p>
            <p className="text-label-gray mb-4 text-[.9rem]">
                Nothing left to say, let's go!!
            </p>

            <Link
                href="/profile"
                passHref
                className="bg-green-500 text-white rounded-md py-[0.813rem] px-[1.969rem] text-[.9rem]"
            >
                Go to profile
            </Link>
        </div>
    );
};
