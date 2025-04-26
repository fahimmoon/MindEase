/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'heading-mobile': ['2rem', { lineHeight: '2.5rem' }],
        'heading-desktop': ['3rem', { lineHeight: '3.5rem' }],
        'subheading-mobile': ['1.125rem', { lineHeight: '1.75rem' }],
        'subheading-desktop': ['1.25rem', { lineHeight: '2rem' }],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      keyframes: {
        softPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        softPulse: 'softPulse 3s infinite'
      }
    },
  },
  plugins: [],
}
