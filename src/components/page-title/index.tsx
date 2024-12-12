import { ProfileIcon } from '@/components/profile-icon';

type Props = {
  title: string;
  description: string;
};
export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <ProfileIcon />
        <h1 className="text-wrap text-left text-4xl font-semibold text-black dark:text-white">
          {title}
        </h1>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
};
