import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className="bg-gray-50 h-screen w-screen flex items-center justify-center">
            <Component {...pageProps} />
        </main>
    );
}
