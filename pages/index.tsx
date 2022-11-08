import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { Loader } from '@components/generic'
import { ImTwitter as ImMweeter } from 'react-icons/im'

export default function Index() {
    const { user } = useUser()

    if (user) return <Loader />

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
    )
}
