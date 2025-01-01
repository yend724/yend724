import {
  getZennArticles,
  getQiitaArticles,
  getMyPosts,
  normalizeZennArticle,
  normalizeQiitaArticle,
  normalizeMyPosts,
  sortArticlesByIsoDate,
} from '../../utils/articles';

import { ArticlesPresentation } from './presentation';

export const ArticlesContainer = async () => {
  const zennArticles = await getZennArticles();
  const qiitaArticles = await getQiitaArticles();
  const posts = await getMyPosts();

  const articles = [
    ...zennArticles.map(normalizeZennArticle),
    ...qiitaArticles.map(normalizeQiitaArticle),
    ...posts.filter(article => !article.draft).map(normalizeMyPosts),
  ];

  const sortedArticles = sortArticlesByIsoDate(articles);

  return <ArticlesPresentation articles={sortedArticles} />;
};
