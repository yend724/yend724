type AbsolutePath = string & {
  _brand: 'absolutePath';
};

export const isAbsolutePath = (href: string): href is AbsolutePath => {
  return href.startsWith('http');
};
