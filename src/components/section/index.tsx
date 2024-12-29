import { Link } from '@/components/link';

type Props = {
  title: string;
  moreLink?: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
};
export const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="grid gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
