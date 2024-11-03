import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';

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
      <body className="min-h-svh bg-white px-4 py-10 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-300">
        <main className="mx-auto block w-full max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
