import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { MyWorks } from '@/features/my-works/components';
import { Articles } from '@/features/articles/components';
import { SITE_META } from '@/constants';

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  openGraph: {
    ...SITE_META.openGraph,
    type: 'website',
  },
};

const Home = () => {
  return (
    <div className="grid gap-16">
      <Section title="投稿一覧">
        <Articles />
      </Section>
      <Section title="作ったもの">
        <MyWorks />
      </Section>
    </div>
  );
};

export default Home;
