export const getColorMode = () => {
  const colorMode = localStorage.getItem('color-mode');
  if (colorMode) {
    return colorMode;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const switchColorMode = (colorMode: string) => {
  const html = document.querySelector('html');
  if (html) {
    localStorage.setItem('color-mode', colorMode);
    html.setAttribute('data-color-mode', colorMode);
  }
};
