import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid gap-4">
      {MY_WORKS.map((work, index) => (
        <div key={index} className="grid gap-y-4">
          <h3 className="text-lg font-semibold">{work.title}</h3>
          <div>
            <p>{work.description}</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-2">
              <dt>URL:</dt>
              <dd>
                <Link
                  href={work.url}
                  className="text-sky-700 underline hover:no-underline dark:text-sky-400"
                >
                  {work.url}
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
};
