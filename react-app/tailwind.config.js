/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bankgothic': ['Bank Gothic', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        header_background: "url('images/header-background.jpg')",
        main_background: "url('assets/asset_1.png')",
      },
      spacing: {
        '124': '124px',
        '128': '32rem',
        '168': '168px',
        '169': '169px',
        '256': '64rem',
      }
    },
  },
  plugins: [],
};
