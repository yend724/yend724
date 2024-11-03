import Link from 'next/link';
import { isAbsolutePath } from '@/utils/isAbsolutePath';

type Props = {
  label: string;
  href: string;
};
export const LinkTag: React.FC<Props> = ({ label, href }) => {
  const isAbsolute = isAbsolutePath(href);

  return (
    <Link
      className="text-sky-700 underline hover:no-underline dark:text-sky-400"
      href={href}
      target={isAbsolute ? '_blank' : '_blank'}
      rel={isAbsolute ? 'noopener noreferrer' : undefined}
    >
      {label}
    </Link>
  );
};
