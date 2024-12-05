import Parser from 'rss-parser';
import { type QiitaRSSFeedItem, type QiitaRSSFeed } from '../types';

const parser = new Parser();

export const getQiitaArticles = async (params?: { limit?: number }) => {
  const feed = (await parser.parseURL(
    'https://qiita.com/yend724/feed'
  )) as QiitaRSSFeed;
  const articles = feed.items.slice(0, params?.limit).map(item => {
    return item as QiitaRSSFeedItem;
  });
  return { articles };
};
