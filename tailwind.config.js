const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.{blade.php,html,vue,js,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
