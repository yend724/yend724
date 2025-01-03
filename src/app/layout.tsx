import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={FaviconIcon.src} sizes="any" />
      </head>
      <body className="bg-neutral-800 font-sans text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
