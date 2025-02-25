/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Playfair Display Variable", ...defaultTheme.fontFamily.serif],
            }
        }
    },
    darkmode: "media",
    plugins: [],
}