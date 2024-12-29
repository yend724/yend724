import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';
import { ProfileIcon } from '@/components/profile-icon';
import { Link } from '@/components/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-color-mode="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={FaviconIcon.src} sizes="any" />
      </head>
      <body className="bg-neutral-200 font-mono text-neutral-700 antialiased dark:bg-neutral-800 dark:text-neutral-100">
        <div className="grid min-h-svh grid-rows-[auto_1fr_auto] gap-8 px-4 pb-6 pt-12">
          <header className="mx-auto block w-full max-w-5xl">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8">
                <ProfileIcon />
              </div>
              <span className="font-lg font-bold">YEND</span>
            </Link>
          </header>
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
