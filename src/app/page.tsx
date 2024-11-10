import { ProfileIcon } from '@/components/profile-icon';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';
import { Link } from '@/components/link';
import { MyWorks } from '@/features/my-works/components';
import { ZennArticles } from '@/features/zenn-articles/components';

const Home = () => {
  return (
    <article className="grid gap-y-12">
      <div className="grid gap-y-4">
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
      <section className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Zenn</h2>
          <Link
            href="https://zenn.dev/yend724"
            className="underline hover:no-underline"
          >
            すべてのZennの記事を見る
          </Link>
        </div>
        <ZennArticles />
      </section>
      <section className="grid gap-4">
        <div>
          <h2 className="text-xl font-semibold">作ったもの置き場</h2>
        </div>
        <MyWorks />
      </section>
    </article>
  );
};

export default Home;
