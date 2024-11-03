import { ProfileIcon } from '@/components/profile-icon';
import { PageTitle } from '@/components/page-title';
import { LinkCard } from '@/components/link-card';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="grid content-center">
          <ProfileIcon />
        </div>
        <div className="grid content-center break-all">
          <PageTitle title="YEND" description="プログラムを書く砂滑" />
        </div>
      </div>
      <div className="grid gap-y-8 py-8">
        <LinkCard label="X（旧Twitter）" href="https://x.com/yend724" />
        <LinkCard label="GitHub" href="https://github.com/yend724" />
        <LinkCard label="Zenn" href="https://zenn.dev/yend724" />
      </div>
    </div>
  );
};

export default Home;
