import { Fragment } from 'react';
import {
  getZennArticles,
  getQiitaArticles,
  normalizeZennArticle,
  normalizeQiitaArticle,
  sortArticlesByIsoDate,
} from '../../utils/articles';
import { Article } from '../article';

export const Articles = async () => {
  const { articles: zennArticles } = await getZennArticles();
  const { articles: qiitaArticles } = await getQiitaArticles();

  const articles = [
    ...zennArticles.map(normalizeZennArticle),
    ...qiitaArticles.map(normalizeQiitaArticle),
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
