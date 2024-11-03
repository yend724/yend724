type ZennRSSFeedEnclosure = {
  url: string;
  length: string;
  type: string;
};
export type ZennRSSFeedItem = {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  enclosure?: ZennRSSFeedEnclosure;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};
