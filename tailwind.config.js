/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1E5BFA',
          'light': '#4DACFF',
          'dark': '#0F1A2F',
        },
        'accent': {
          DEFAULT: '#B01EFF',
          'light': '#D27AFF',
        },
        'dark': {
          DEFAULT: '#0A0A0A',
          'light': '#1A1A1A',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px rgba(176, 30, 255, 0.5), 0 0 20px rgba(176, 30, 255, 0.3)',
        'neon-blue': '0 0 5px rgba(30, 91, 250, 0.5), 0 0 20px rgba(30, 91, 250, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
