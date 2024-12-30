import {
  getZennArticles,
  getQiitaArticles,
  getMyPosts,
  normalizeZennArticle,
  normalizeQiitaArticle,
  normalizeMyPosts,
  sortArticlesByIsoDate,
} from '../../utils/articles';
import { Article } from '../article';

export const Articles = async () => {
  const zennArticles = await getZennArticles();
  const qiitaArticles = await getQiitaArticles();
  const posts = await getMyPosts();

  const articles = [
    ...zennArticles.map(normalizeZennArticle),
    ...qiitaArticles.map(normalizeQiitaArticle),
    ...posts.map(normalizeMyPosts),
  ];

  const sortedArticles = sortArticlesByIsoDate(articles);

  return (
    <div className="grid gap-y-8">
      {sortedArticles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};
