import { QiitaRSSFeedItem } from '../../types';
import { Link } from '@/components/link';

type Props = {
  article: QiitaRSSFeedItem;
};
export const QiitaArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.id} className="grid gap-2">
      <h3 className="text-lg font-semibold">{article.title}</h3>
      <div>
        <p>{article.content}</p>
        <Link
          href={article.link}
          className="text-sky-700 underline hover:no-underline dark:text-sky-400"
        >
          続きを読む
        </Link>
      </div>
    </article>
  );
};