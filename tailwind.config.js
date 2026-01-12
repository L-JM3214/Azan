/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'prayer-violet': {
            DEFAULT: '#A78BFA',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          'magic-gold': {
            DEFAULT: '#FBBF24',
            light: '#FCD34D',
            dark: '#D97706',
          },
          'soft-mint': '#A7F3D0',
          'baby-pink': '#FCE7F3',
        },
        fontFamily: {
          'fun-title': ['"Fredoka"', 'sans-serif'],
          'body': ['"Quicksand"', 'system-ui', 'sans-serif'],
        },
        borderRadius: {
          'xl-fun': '1.5rem',
          '2xl-fun': '2rem',
          'pill': '9999px',
        },
        boxShadow: {
          'magic': '0 10px 25px -5px rgba(167, 139, 250, 0.3)',
          'gold-glow': '0 0 20px rgba(251, 191, 36, 0.4)',
        },
      },
    },
    plugins: [],
  }