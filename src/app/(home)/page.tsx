import type { Metadata } from 'next';
import { MyWorks } from '@/features/my-works/components';
import { Articles } from '@/features/articles/components';
import { SITE_META } from '@/constants';

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  openGraph: {
    ...SITE_META.openGraph,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const Home = () => {
  return (
    <div className="grid gap-16">
      <section className="grid gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">投稿一覧</h2>
        </div>
        <Articles />
      </section>
      <section className="grid gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">作ったもの</h2>
        </div>
        <MyWorks />
      </section>
    </div>
  );
};

export default Home;
