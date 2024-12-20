import { getZennArticles } from '@/features/zenn-articles/utils/zenn-articles';
import { ZennArticle } from '@/features/zenn-articles/components/zenn-article';

export const ZennArticles = async () => {
  const { articles } = await getZennArticles({
    limit: 6,
  });
  return (
    <div className="grid">
      <hr className="neumorphism-border h-1 border-none" />
      {articles.map((article, i) => (
        <>
          <ZennArticle key={article.guid} article={article} />
          <hr className="neumorphism-border h-1 border-none" />
        </>
      ))}
    </div>
  );
};
