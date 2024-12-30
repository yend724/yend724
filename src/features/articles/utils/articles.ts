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

export const normalizeMyPosts = (file: {
  title: string;
  date: string;
  slug: string;
}) => {
  return {
    id: file.slug,
    title: file.title,
    link: `/posts/${file.slug}`,
    isoDate: new Date(file.date).toISOString(),
    source: 'yend' as const,
  };
};

export const getZennArticles = async () => {
  const feed = await parser.parseURL('https://zenn.dev/yend724/feed?all=1');
  const articles = feed.items.map(item => {
    return item as ZennRSSFeedItem;
  });
  return articles;
};
export const getQiitaArticles = async () => {
  const feed = (await parser.parseURL(
    'https://qiita.com/yend724/feed'
  )) as QiitaRSSFeed;
  const articles = feed.items.map(item => {
    return item as QiitaRSSFeedItem;
  });
  return articles;
};

export const getMyPosts = () => {
  const currentAbsolutePath = process.cwd();
  const targetPath = `${currentAbsolutePath}/src/contents/posts`;
  const fileNames = fs.readdirSync(targetPath);

  const mdxFiles = Promise.all(
    fileNames.map(async fileName => {
      const file = (await import(`@/contents/posts/${fileName}`)) as {
        meta: {
          title: string;
          date: string;
        };
      };
      return {
        title: file.meta.title,
        date: file.meta.date,
        slug: `${fileName.replace('.mdx', '')}`,
      };
    })
  );

  return mdxFiles;
};

export const sortArticlesByIsoDate = (articles: Article[]) => {
  return articles.sort((a, b) => {
    return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
  });
};
