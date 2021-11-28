module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    primary: "#5DB1F8",
                    secondary: "#38A3FF",
                    tertiary: "#1D90F3",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};