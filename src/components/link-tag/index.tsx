import { Link } from '@/components/link';

type Props = {
  label: string;
  href: string;
};
export const LinkTag: React.FC<Props> = ({ label, href }) => {
  return (
    <Link
      className="neumorphism-shadow px-4 py-2 text-sm rounded-full text-sky-700 dark:text-sky-400 new"
      href={href}
    >
      {label}
    </Link>
  );
};
