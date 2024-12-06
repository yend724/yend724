import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import lineClampPlugin from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    lineClampPlugin,
    plugin(({ addVariant }) => {
      addVariant('hover', '@media(any-hover:hover){ &:hover }');
    }),
  ],
};
export default config;
