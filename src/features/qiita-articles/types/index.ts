export type QiitaRSSFeedItem = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: string;
};
export type QiitaRSSFeed = {
  items: QiitaRSSFeedItem[];
  link: string;
  feedUrl: string;
  title: string;
  lastBuildDate: string;
};
