import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="YEND の Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={FaviconIcon.src} sizes="any" />
        <title>YEND Profile</title>
      </head>
      <body className="grid min-h-svh grid-rows-[1fr_auto] bg-white px-4 pb-4 pt-10 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
