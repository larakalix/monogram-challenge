/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_ENV: process.env.NEXT_ENV,
        NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY,
        NEXT_MAGIC_SECRET_KEY: process.env.NEXT_MAGIC_SECRET_KEY,
        NEXT_TEST_AUTH: process.env.NEXT_TEST_AUTH,
        NEXT_DATO_CMS_TOKEN: process.env.NEXT_DATO_CMS_TOKEN,
    },
    images: {
        domains: ["www.datocms-assets.com"],
    },
};

module.exports = nextConfig;
