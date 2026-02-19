/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                espresso: '#0c0a09',
                cognac: '#A88464',
                oak: '#574636',
                gold: '#C5A059',
                platinum: '#f5f5f5',
            },
            fontFamily: {
                serif: ['EB Garamond', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
