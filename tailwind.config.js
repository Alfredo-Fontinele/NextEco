/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                grey_white: "#E5E5E5",
                off_white: "#EBF0F9",
                green_1: "#70C174",
                green_2: "#BEF3C0",
                black: "#0B0706",
                grey_1: "#232536",
                grey_2: "#1D2130",
                grey_3: "#525560",
            },
        },
    },
    plugins: [],
};
