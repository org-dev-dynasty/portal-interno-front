/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-R': 'linear-gradient(to right, #262626, #111111)',
        'gradient-to-L': 'linear-gradient(to right, #111111, #262626 )',
        // Adicione mais gradientes personalizados aqui
      },
      fontSize: {
        '3xs' : '0.5rem',
        '2xs' : '0.625rem',
      },
      boxShadow: {
        '3xl': '0 0 10px rgba(255, 255 ,255, 0.2)',
      },

      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        'BORDER': 'rgba(255, 255, 255, 0.2)',
        'BLACK': '#161616',
        'ORANGE': '#F06B41',
        'LIGHT_ORANGE': 'rgba(240, 107, 65, .8)',
        'BACKGROUND-DARK': '#595959',
        'B-BACKGROUND': '#060606',
        'C-BACKGROUND': '#1D1D1D',
      },
      spacing: {
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '36': '9rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
}

