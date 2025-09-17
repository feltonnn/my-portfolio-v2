// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Use the new Tailwind PostCSS plugin package
    require('autoprefixer'), // Ensure autoprefixer is included
  ],
};
