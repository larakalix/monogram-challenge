/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-blue": "#2F80ED",
                "link-gray": "#4B5563",
                "heading-gray": "#334155",
                "label-gray": "#374151",
                sidebar: "#F3F4F6",
            },
        },
    },
    plugins: [],
};
