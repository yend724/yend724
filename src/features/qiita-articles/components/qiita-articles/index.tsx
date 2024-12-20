import { getQiitaArticles } from '@/features/qiita-articles/utils/qiita-articles';
import { QiitaArticle } from '@/features/qiita-articles/components/qiita-article';

export const QiitaArticles = async () => {
  const { articles } = await getQiitaArticles({
    limit: 6,
  });
  return (
    <div className="grid">
      <hr className="neumorphism-border h-1 border-none" />
      {articles.map(article => (
        <>
          <QiitaArticle key={article.id} article={article} />
          <hr className="neumorphism-border h-1 border-none" />
        </>
      ))}
    </div>
  );
};
