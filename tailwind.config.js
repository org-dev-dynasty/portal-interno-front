/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BLACK': '#161616',
        'ORANGE': '#F06B41',
        'BACKGROUND-DARK': '#595959',
        'B-BACKGROUND': '#060606',
        'C-BACKGROUND': '#1D1D1D',
      }
    },
  },
  plugins: [],
}

