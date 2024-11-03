import Image from 'next/image';
import ProfileIconImage from '@/assets/images/profile-icon.png';

export const ProfileIcon = () => {
  return (
    <div className="size-20 overflow-hidden rounded-full bg-gradient-to-br from-sky-400 to-sky-500 p-0.5 dark:from-sky-600 dark:to-sky-700">
      <div className="overflow-hidden rounded-full">
        <Image
          src={ProfileIconImage}
          width={512}
          height={512}
          alt="YENDのプロフィールアイコン。スナメリのイラスト。"
          loading="eager"
        />
      </div>
    </div>
  );
};
