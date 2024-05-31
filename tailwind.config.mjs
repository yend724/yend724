/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans JP',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    require('@digital-go-jp/tailwind-theme-plugin'),
    function ({ addVariant }) {
      addVariant('hover', '@media(any-hover:hover){ &:hover }');
    },
  ],
};
