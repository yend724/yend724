import Image from 'next/image';
import { Article as ArticleInterface } from '../../types';
import { Link } from '@/components/link';
import QiitaIcon from '@/assets/images/qiita-icon.png';
import ZennIcon from '@/assets/images/zenn-icon.svg';

const PlatformBadgeMap = {
  zenn: {
    label: 'Zenn',
    icon: ZennIcon,
  },
  qiita: {
    label: 'Qiita',
    icon: QiitaIcon,
  },
};

type Props = {
  article: ArticleInterface;
};
export const Article: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.id}>
      <Link href={article.link} className="group grid gap-2">
        <div className="flex gap-2 items-center text-sm">
          <span>公開日</span>
          <time dateTime={article.isoDate}>
            {new Date(article.isoDate).toLocaleDateString('ja-JP')}
          </time>
        </div>
        <h3 className="text-lg font-semibold group-hover:underline">
          {article.title}
        </h3>
        <span className="flex gap-x-2 items-center">
          <Image
            src={PlatformBadgeMap[article.source].icon}
            alt={article.source}
            width={16}
            height={16}
            className="size-4"
          />
          <span className="text-sm font-medium">
            {PlatformBadgeMap[article.source].label}
          </span>
        </span>
      </Link>
    </article>
  );
};
