import Link from 'next/link';

import { ExternalLinkIcon } from '@/components/icons/external-link';

type Props = {
  label: string;
  href: string;
};
export const LinkCard: React.FC<Props> = ({ label, href }) => {
  return (
    <Link
      className="border border-blue-1000 rounded p-4 flex items-center justify-between text-blue-1000
  hover:bg-blue-50 hover:underline
  focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus-yellow
  dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-950"
      href={href}
    >
      {label}
      <ExternalLinkIcon />
    </Link>
  );
};
