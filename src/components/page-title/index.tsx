import { ProfileIcon } from '@/components/profile-icon';
// import { ColorModeSwitch } from '@/components/color-mode-switch';

type Props = {
  title: string;
  description: string;
};
export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <div className="size-12">
          <ProfileIcon />
        </div>
        <h1 className="text-wrap text-left text-3xl font-semibold  text-white">
          {title}
        </h1>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
};
