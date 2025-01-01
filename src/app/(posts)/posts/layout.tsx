import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';
import { ProfileIcon } from '@/components/profile-icon';
import { Link } from '@/components/link';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja" data-color-mode="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={FaviconIcon.src} sizes="any" />
      </head>
      <body className="bg-neutral-200 font-mono text-neutral-700 antialiased dark:bg-neutral-800 dark:text-neutral-100">
        <div className="grid min-h-svh grid-rows-[auto_1fr_auto] gap-12 px-4 py-6">
          <header className="mx-auto flex w-full max-w-5xl">
            <Link href="/" className="flex items-center gap-2">
              <span className="size-8">
                <ProfileIcon />
              </span>
              <span className="font-bold">YEND</span>
            </Link>
          </header>
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
