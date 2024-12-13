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
      <Link
        href={article.link}
        className="text-sky-700 w-max underline hover:no-underline dark:text-sky-400"
      >
        <h3 className="text-2xl font-semibold">{article.title}</h3>
      </Link>
      <p className="line-clamp-3">{article.contentSnippet}</p>
    </article>
  );
};
