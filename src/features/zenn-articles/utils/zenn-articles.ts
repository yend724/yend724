import Parser from 'rss-parser';
import { ZennRSSFeedItem } from '../types';

const parser = new Parser();

export const getZennArticles = async (params?: { limit?: number }) => {
  const feed = await parser.parseURL('https://zenn.dev/yend724/feed?all=1');
  const articles = feed.items.slice(0, params?.limit).map(item => {
    return item as ZennRSSFeedItem;
  });
  return { articles };
};
