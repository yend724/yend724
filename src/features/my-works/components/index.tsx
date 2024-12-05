import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid gap-4">
      {MY_WORKS.map((work, index) => (
        <div key={index} className="grid gap-y-2">
          <h3 className="text-base font-semibold">{work.title}</h3>
          <div>
            <p>{work.description}</p>
            <Link
              href={work.url}
              className="text-sky-700 underline hover:no-underline dark:text-sky-400"
            >
              {work.url}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
