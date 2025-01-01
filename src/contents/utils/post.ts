import { Meta } from '../types/post';

type GeneratePostMetaArgs = {
  title: string;
  date: string;
  draft?: boolean;
  tags?: string[];
};
export const generatePostMeta = (args: GeneratePostMetaArgs): Meta => {
  const { title, date, draft = true, tags = [] } = args;
  return {
    title,
    date,
    draft,
    tags,
  };
};
