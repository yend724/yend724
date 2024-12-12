import type { Metadata } from 'next';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';
import { Section } from '@/components/section';
import { MyWorks } from '@/features/my-works/components';
import { ZennArticles } from '@/features/zenn-articles/components';
import { QiitaArticles } from '@/features/qiita-articles/components';
import { SOCIAL_LINKS } from '@/constants';

export const metadata: Metadata = {
  title: 'YEND Profile',
  description: 'YEND の Profile',
};

const Home = () => {
  return (
    <div className="grid gap-16">
      <div className="grid gap-4">
        <PageTitle title="YEND" description="プログラムを書く砂滑" />
        <div className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map(link => (
            <LinkTag key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </div>
      <Section
        title="Zennで書いた記事"
        moreLink={{
          href: 'https://zenn.dev/yend724',
          label: 'Zennの記事をもっと見る',
        }}
      >
        <ZennArticles />
      </Section>
      <Section
        title="Qiitaで書いた記事"
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
