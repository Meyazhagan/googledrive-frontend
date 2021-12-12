module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
            height: {
                my: "80vh",
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ["hover", "active"],
            textColor: ["focus", "group-focus", "focus-within"],
        },
    },
    plugins: [],
};
