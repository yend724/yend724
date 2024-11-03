import Parser from 'rss-parser';
const parser = new Parser();

import { ZennRSSFeedItem } from '../types';

export const getZennArticles = async () => {
  const feed = await parser.parseURL('https://zenn.dev/yend724/feed?all=1');
  const articles = feed.items.map(item => {
    return item as ZennRSSFeedItem;
  });
  return { articles };
};
