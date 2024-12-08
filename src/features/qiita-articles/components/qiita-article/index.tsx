import { QiitaRSSFeedItem } from '../../types';
import { Link } from '@/components/link';

type Props = {
  article: QiitaRSSFeedItem;
};
export const QiitaArticle: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.id} className="grid gap-2">
      <div className="flex gap-2 text-sm">
        <span>公開日:</span>
        <time dateTime={article.isoDate}>
          {new Date(article.isoDate).toLocaleDateString('ja-JP')}
        </time>
      </div>
      <h3 className="text-2xl font-semibold">{article.title}</h3>
      <p className="line-clamp-3">{article.contentSnippet}</p>
      <div className="mt-2">
        <Link
          href={article.link}
          className="text-sky-700 underline hover:no-underline dark:text-sky-400"
        >
          続きを読む →
        </Link>
      </div>
    </article>
  );
};
