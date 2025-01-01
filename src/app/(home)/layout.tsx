import { Footer } from '@/components/footer';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';
import { SOCIAL_LINKS, SITE_META } from '@/constants';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr] gap-16 px-4 pb-6 pt-12">
      <header className="mx-auto block w-full max-w-5xl">
        <div className="grid gap-4">
          <PageTitle
            title={SITE_META.title}
            description="プログラムを書く砂滑"
          />
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map(link => (
              <LinkTag key={link.label} label={link.label} href={link.href} />
            ))}
          </div>
        </div>
      </header>
      <main className="mx-auto block w-full max-w-5xl overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
