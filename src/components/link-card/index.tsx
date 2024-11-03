import Link from 'next/link';

import { ExternalLinkIcon } from '@/components/icons/external-link';

type Props = {
  label: string;
  href: string;
};
export const LinkCard: React.FC<Props> = ({ label, href }) => {
  return (
    <Link
      className="flex items-center justify-between rounded border p-4 focus-visible:rounded focus-visible:outline focus-visible:outline-2 hover:bg-blue-50 hover:underline dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-950"
      href={href}
    >
      {label}
      <ExternalLinkIcon />
    </Link>
  );
};
