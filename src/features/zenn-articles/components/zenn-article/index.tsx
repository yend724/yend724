import { ZennRSSFeedItem } from '../../types';
import { Link } from '@/components/link';

type Props = {
  article: ZennRSSFeedItem;
};
export const ZennArticle: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.guid} className="grid gap-2">
      <div className="flex gap-2 text-sm">
        <span>公開日:</span>
        <time dateTime={article.isoDate}>
          {new Date(article.isoDate).toLocaleDateString('ja-JP')}
        </time>
      </div>
      <div>
        <Link
          href={article.link}
          className="text-sky-700 underline hover:no-underline dark:text-sky-400"
        >
          <h3 className="text-2xl font-semibold inline">{article.title}</h3>
        </Link>
      </div>
      <p className="line-clamp-3">{article.contentSnippet}</p>
    </article>
  );
};
