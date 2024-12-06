import { getZennArticles } from '@/features/zenn-articles/utils/zenn-articles';
import { ZennArticle } from '@/features/zenn-articles/components/zenn-article';

export const ZennArticles = async () => {
  const { articles } = await getZennArticles({
    limit: 6,
  });
  return (
    <div className="grid gap-12">
      {articles.map(article => (
        <ZennArticle key={article.guid} article={article} />
      ))}
    </div>
  );
};
