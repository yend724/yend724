import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid gap-6">
      {MY_WORKS.map((work, index) => (
        <article key={index}>
          <Link
            href={work.url}
            className="grid gap-2 p-4 rounded-lg article-card-shadow"
          >
            <h3 className="text-xl font-semibold inline">{work.title}</h3>
            <p>{work.description}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};
