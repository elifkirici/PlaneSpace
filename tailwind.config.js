/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        'bg-color': "#F7F5F8",
        'dark-text': '#353734',
        'light-text': '#757575',
        'dark-purple': '#4A0197',
        'light-purple': '#8D60B9',
        'light-btn': "#E6E0EB"
      },
    },
  },
  plugins: [],
}

