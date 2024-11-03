import { ProfileIcon } from '@/components/profile-icon';
import { PageTitle } from '@/components/page-title';
import { LinkTag } from '@/components/link-tag';

import { ZennArticles } from '@/features/zenn-articles/components';

const Home = async () => {
  return (
    <div className="grid gap-y-8">
      <div className="grid gap-y-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <ProfileIcon />
          <PageTitle title="YEND" description="プログラムを書く砂滑" />
        </div>
        <div className="flex flex-wrap gap-2">
          <LinkTag label="X(旧Twitter)" href="https://x.com/yend724" />
          <LinkTag label="GitHub" href="https://github.com/yend724" />
        </div>
      </div>
      <section className="grid gap-4">
        <h2 className="text-lg">Zenn 一覧</h2>
        <ZennArticles />
      </section>
    </div>
  );
};

export default Home;
