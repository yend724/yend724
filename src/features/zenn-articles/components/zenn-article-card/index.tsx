import { ZennRSSFeedItem } from '../../types';
import Image from 'next/image';
import { Link } from '@/components/link';

type Props = {
  article: ZennRSSFeedItem;
};
export const ZennArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article key={article.guid}>
      <Link href={article.link}>
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
