import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-color-mode="dark"]'],
  theme: {},
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hover', '@media(any-hover:hover){ &:hover }');
      addVariant('group-hover', '@media(any-hover:hover){ .group:hover & }');
    }),
  ],
};

export default config;
