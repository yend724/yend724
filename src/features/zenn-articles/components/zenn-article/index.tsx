import { ZennRSSFeedItem } from '../../types';
import { Link } from '@/components/link';

type Props = {
  article: ZennRSSFeedItem;
};
export const ZennArticle: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.guid}>
      <Link
        href={article.link}
        className="grid gap-2 p-4 rounded-lg neumorphism-shadow"
      >
        <div className="flex gap-2 text-sm">
          <span>公開日:</span>
          <time dateTime={article.isoDate}>
            {new Date(article.isoDate).toLocaleDateString('ja-JP')}
          </time>
        </div>
        <h3 className="text-xl font-semibold">{article.title}</h3>
        <p className="line-clamp-3">{article.contentSnippet}</p>
      </Link>
    </article>
  );
};
