import { getZennArticles } from '@/features/zenn-articles/utils/zenn-articles';
import { ZennArticleCard } from '@/features/zenn-articles/components/zenn-article-card';

export const ZennArticles = async () => {
  const { articles } = await getZennArticles({
    limit: 6,
  });
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4">
      {articles.map(article => (
        <ZennArticleCard key={article.guid} article={article} />
      ))}
    </div>
  );
};
