/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#9333ea',
          light: '#c084fc',
          dark: '#7c22ce',
          deeper: '#6b21a8',
        },
        pink: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          soft: '#f9a8d4',
        },
        romantic: {
          red: '#ef4444',
          rose: '#fb7185',
        },
        background: {
          dark: '#1a0a2e',
          light: '#2d1b4e',
        }
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        elegant: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '35%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.15)' },
          '55%': { transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #9333ea, 0 0 40px #9333ea' },
          '100%': { boxShadow: '0 0 30px #ec4899, 0 0 60px #ec4899' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
