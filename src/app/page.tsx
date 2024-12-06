import { ProfileIcon } from '@/components/profile-icon';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';
import { Link } from '@/components/link';
import { MyWorks } from '@/features/my-works/components';
import { ZennArticles } from '@/features/zenn-articles/components';
import { QiitaArticles } from '@/features/qiita-articles/components';

const Home = () => {
  return (
    <div className="grid gap-24">
      <div className="grid gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <ProfileIcon />
          <PageTitle title="YEND" description="プログラムを書く砂滑" />
        </div>
        <div className="flex flex-wrap gap-2">
          <LinkTag label="X(旧Twitter)" href="https://x.com/yend724" />
          <LinkTag label="GitHub" href="https://github.com/yend724" />
          <LinkTag label="CodePen" href="https://codepen.io/yend24" />
        </div>
      </div>
      <section className="grid gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Zennで書いた記事
          </h2>
          <Link
            href="https://zenn.dev/yend724"
            className="underline hover:no-underline"
          >
            すべてのZennの記事を見る
          </Link>
        </div>
        <ZennArticles />
      </section>
      <section className="grid gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Qiitaで書いた記事
          </h2>
          <Link
            href="https://qiita.com/yend724"
            className="underline hover:no-underline"
          >
            すべてのQiitaの記事を見る
          </Link>
        </div>
        <QiitaArticles />
      </section>
      <section className="grid gap-8">
        <div>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            作ったもの
          </h2>
        </div>
        <MyWorks />
      </section>
    </div>
  );
};

export default Home;
