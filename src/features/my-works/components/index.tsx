import { Link } from '@/components/link';
import { MY_WORKS } from '../constants';

export const MyWorks = () => {
  return (
    <div className="grid">
      <hr className="neumorphism-border h-1 border-none" />
      {MY_WORKS.map((work, index) => (
        <>
          <article key={index}>
            <Link href={work.url} className="group grid gap-2 py-4">
              <h3 className="text-xl font-semibold group-hover:underline">
                {work.title}
              </h3>
              <p>{work.description}</p>
            </Link>
          </article>
          <hr className="neumorphism-border h-1 border-none" />
        </>
      ))}
    </div>
  );
};
