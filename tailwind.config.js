/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-black": "#111827",
                "main-blue": "#2F80ED",
                "link-gray": "#4B5563",
                "heading-gray": "#334155",
                "label-gray": "#374151",
                "sub-label-gray": "#6B7280",
                "label-gray-active": "#EBEDF1",
                sidebar: "#F3F4F6",
                "main-gray-border": "#E5E7EB",
                "primary-button": "#6A73C5",
                "input-border": "#D1D5DB",
            },
        },
    },
    plugins: [],
};
