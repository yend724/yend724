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
      <Link href={article.link} className="group grid gap-2 w-max">
        <time
          className="flex gap-1 items-center text-sm"
          dateTime={article.isoDate}
        >
          <span>{new Date(article.isoDate).toLocaleDateString('ja-JP')}</span>
          <span>に公開</span>
        </time>
        <h3 className="text-lg font-semibold group-hover:underline">
          {article.title}
        </h3>
        <span className="flex gap-x-2 items-center">
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
