/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards',
        'scale-up': 'scaleUp 1s ease-out forwards',
        'zoom-in': 'zoomIn 1s ease-out forwards',
      },
    },
  },
  roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
  plugins: [],
};
