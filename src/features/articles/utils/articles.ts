import fs from 'node:fs';
import Parser from 'rss-parser';
import type {
  ZennRSSFeedItem,
  QiitaRSSFeedItem,
  QiitaRSSFeed,
  Article,
} from '../types';

const parser = new Parser();

export const normalizeZennArticle = (article: ZennRSSFeedItem) => {
  return {
    id: article.guid,
    title: article.title,
    link: article.link,
    isoDate: article.isoDate,
    source: 'zenn' as const,
  };
};
export const normalizeQiitaArticle = (article: QiitaRSSFeedItem) => {
  return {
    id: article.id,
    title: article.title,
    link: article.link,
    isoDate: article.isoDate,
    source: 'qiita' as const,
  };
};

export const getZennArticles = async () => {
  const feed = await parser.parseURL('https://zenn.dev/yend724/feed?all=1');
  const articles = feed.items.map(item => {
    return item as ZennRSSFeedItem;
  });
  return { articles };
};
export const getQiitaArticles = async () => {
  const feed = (await parser.parseURL(
    'https://qiita.com/yend724/feed'
  )) as QiitaRSSFeed;
  const articles = feed.items.map(item => {
    return item as QiitaRSSFeedItem;
  });
  return { articles };
};

export const getMyArticles = async () => {
  const currentAbsolutePath = process.cwd();
  const targetPath = `${currentAbsolutePath}/src/contents/posts`;
  const files = fs.readdirSync(targetPath);

  const articles = await Promise.all(
    files.map(async file => {
      const content = await import(`@/contents/posts/${file}`);
      return {
        id: file,
        title: content.meta.title,
        isoDate: new Date(content.meta.date).toISOString(),
        link: `/posts/${file.replace(/\.mdx$/, '')}`,
        source: 'self' as const,
      };
    })
  );

  return articles;
};

export const sortArticlesByIsoDate = (articles: Article[]) => {
  return articles.sort((a, b) => {
    return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
  });
};
