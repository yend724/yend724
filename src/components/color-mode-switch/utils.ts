const isClient = typeof window === 'object';
const isPrefersColorSchemaDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const getColorMode = (): string => {
  if (!isClient) return 'dark';

  const cacheColorMode = localStorage.getItem('color-mode');
  if (cacheColorMode) {
    return cacheColorMode;
  }

  return isPrefersColorSchemaDark() ? 'dark' : 'light';
};

export const getNextColorMode = (): string => {
  return getColorMode() === 'dark' ? 'light' : 'dark';
};

export const setColorMode = (colorMode: string): void => {
  if (!isClient) return;

  const html = document.querySelector('html');
  if (html) {
    localStorage.setItem('color-mode', colorMode);
    html.setAttribute('data-color-mode', colorMode);
  }
};
