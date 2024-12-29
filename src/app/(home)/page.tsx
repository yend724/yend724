import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { MyWorks } from '@/features/my-works/components';
import { ZennArticles } from '@/features/zenn-articles/components';
import { QiitaArticles } from '@/features/qiita-articles/components';

export const metadata: Metadata = {
  title: 'YEND Profile',
  description: 'YEND の Profile',
};

const Home = () => {
  return (
    <div className="grid gap-16">
      <Section
        title="Zenn"
        moreLink={{
          href: 'https://zenn.dev/yend724',
          label: 'Zennの記事をもっと見る',
        }}
      >
        <ZennArticles />
      </Section>
      <Section
        title="Qiita"
        moreLink={{
          href: 'https://qiita.com/yend724',
          label: 'Qiitaの記事をもっと見る',
        }}
      >
        <QiitaArticles />
      </Section>
      <Section title="作ったもの">
        <MyWorks />
      </Section>
    </div>
  );
};

export default Home;
