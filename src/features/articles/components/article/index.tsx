import Image from 'next/image';
import { Link } from '@/components/link';
import { Article as ArticleInterface } from '../../types';
import { PLATFORM_ICON_MAP } from '../../constants';

type Props = {
  article: ArticleInterface;
};
export const Article: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.id}>
      <Link href={article.link} className="group grid w-max gap-2">
        <time
          className="flex items-center gap-1 text-sm"
          dateTime={article.isoDate}
        >
          <span>{new Date(article.isoDate).toLocaleDateString('ja-JP')}</span>
          <span>に公開</span>
        </time>
        <h3 className="text-lg font-semibold group-hover:underline">
          {article.title}
        </h3>
        <span className="flex items-center gap-x-2">
          <Image
            src={PLATFORM_ICON_MAP[article.source].icon}
            alt={article.source}
            width={16}
            height={16}
            className="size-4"
          />
          <span className="text-sm font-medium">
            {PLATFORM_ICON_MAP[article.source].label}
          </span>
        </span>
      </Link>
    </article>
  );
};
