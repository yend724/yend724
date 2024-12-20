import { QiitaRSSFeedItem } from '../../types';
import { Link } from '@/components/link';

type Props = {
  article: QiitaRSSFeedItem;
};
export const QiitaArticle: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.id}>
      <Link href={article.link} className="group grid gap-2 py-4">
        <div className="flex gap-2 text-sm">
          <span>公開日:</span>
          <time dateTime={article.isoDate}>
            {new Date(article.isoDate).toLocaleDateString('ja-JP')}
          </time>
        </div>
        <h3 className="text-xl font-semibold group-hover:underline">
          {article.title}
        </h3>
        <p className="line-clamp-3 pb-1">{article.contentSnippet}</p>
      </Link>
    </article>
  );
};
