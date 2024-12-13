import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid gap-12">
      {MY_WORKS.map((work, index) => (
        <div key={index} className="grid gap-2">
          <div>
            <Link
              href={work.url}
              className="text-sky-700 underline break-all hover:no-underline dark:text-sky-400"
            >
              <h3 className="text-2xl font-semibold inline">{work.title}</h3>
            </Link>
          </div>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  );
};
