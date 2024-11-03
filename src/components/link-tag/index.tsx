import { Link } from '@/components/link';

type Props = {
  label: string;
  href: string;
};
export const LinkTag: React.FC<Props> = ({ label, href }) => {
  return (
    <Link
      className="text-sky-700 underline hover:no-underline dark:text-sky-400"
      href={href}
    >
      {label}
    </Link>
  );
};
