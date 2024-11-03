import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hover', '@media(any-hover:hover){ &:hover }');
    }),
  ],
};
export default config;
