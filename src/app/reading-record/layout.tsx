import { Footer } from '@/components/footer';
import { ProfileIcon } from '@/components/profile-icon';
import { Link } from '@/components/link';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr_auto] gap-12 px-4 py-6">
      <header className="mx-auto w-full max-w-5xl">
        <Link href="/" className="flex items-center gap-2">
          <span className="size-8">
            <ProfileIcon />
          </span>
          <span className="font-bold">YEND</span>
        </Link>
      </header>
      <main className="mx-auto block w-full max-w-5xl">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
