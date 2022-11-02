/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // env: {
    //     NEXT_DATO_CMS_TOKEN: process.env.NEXT_DATO_CMS_TOKEN,
    //     NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    // },
    images: {
        domains: ["www.datocms-assets.com"],
    },
};

module.exports = nextConfig;
