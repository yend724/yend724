import '@/assets/styles/globals.css';
import FaviconIcon from '@/assets/images/favicon.ico';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';
import { SOCIAL_LINKS } from '@/constants';

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
      <body className="bg-neutral-200 font-sans text-neutral-700 antialiased dark:bg-neutral-800 dark:text-neutral-100">
        <div className="grid min-h-svh grid-rows-[auto_1fr] gap-20 px-4 pb-6 pt-12">
          <header className="mx-auto block w-full max-w-5xl">
            <div className="grid gap-4">
              <PageTitle title="YEND" description="プログラムを書く砂滑" />
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(link => (
                  <LinkTag
                    key={link.label}
                    label={link.label}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
          </header>
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
