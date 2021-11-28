module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    primary: "#00b0ff",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};