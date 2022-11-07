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
        // Auth0 VARIABLES
        AUTH0_SECRET: process.env.AUTH0_SECRET,
        AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
        AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    },
    images: {
        domains: ["www.datocms-assets.com", "api.multiavatar.com"],
    },
};

module.exports = nextConfig;
