import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid gap-y-8">
      {MY_WORKS.map((work, index) => (
        <article key={index}>
          <Link href={work.url} className="group grid gap-2 w-fit">
            <h3 className="text-lg font-semibold group-hover:underline">
              {work.title}
            </h3>
            <p>{work.description}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};
