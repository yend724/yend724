import { getQiitaArticles } from '@/features/qiita-articles/utils/qiita-articles';
import { QiitaArticleCard } from '@/features/qiita-articles/components/qiita-article-card';

export const QiitaArticles = async () => {
  const { articles } = await getQiitaArticles({
    limit: 6,
  });
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4">
      {articles.map(article => (
        <QiitaArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
