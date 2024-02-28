/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "main-blue": "#2563EB",
                "main-red": "#DC2626"
            }
        },
    },
    plugins: [],
}