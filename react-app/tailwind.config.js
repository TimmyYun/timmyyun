/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header_background: "url('images/header-background.jpg')",
      },
    },
  },
  plugins: [],
};
