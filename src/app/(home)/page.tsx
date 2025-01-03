import type { Metadata } from 'next';
import { MyWorks } from '@/features/my-works/components';
import { Articles } from '@/features/articles/components';
import { ReadingLog } from '@/features/readding-log/components';
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

const Home: React.FC = () => {
  return (
    <div className="grid gap-16">
      <Section title="書いたやつ">
        <Articles />
      </Section>
      <Section title="作ったもの">
        <MyWorks />
      </Section>
      <Section title="読んだ書籍">
        <ReadingLog />
      </Section>
    </div>
  );
};

export default Home;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="grid gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id={title} className="text-xl font-semibold text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
