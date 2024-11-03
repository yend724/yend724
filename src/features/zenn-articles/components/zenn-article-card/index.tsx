import { ZennRSSFeedItem } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

import { isAbsolutePath } from '@/utils/isAbsolutePath';

type Props = {
  article: ZennRSSFeedItem;
};
export const ZennArticleCard: React.FC<Props> = ({ article }) => {
  const isAbsolute = isAbsolutePath(article.link);
  return (
    <article key={article.guid}>
      <Link
        href={article.link}
        target={isAbsolute ? '_blank' : undefined}
        rel={isAbsolute ? 'noopener noreferrer' : undefined}
      >
        <Image
          src={article.enclosure?.url ?? ''}
          alt={article.title}
          width={1200}
          height={630}
        />
      </Link>
    </article>
  );
};
