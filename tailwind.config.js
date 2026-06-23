/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4EB',
        'cream-deep': '#EFE8D6',
        navy: '#172537',
        'navy-deep': '#0E1A28',
        gold: '#B8862E',
        'gold-light': '#D9B068',
        ink: '#2B2B28',
        line: '#DCD3BC',
        muted: '#5A5648',
        faint: '#9A9180',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        pill: '30px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
