import Image from 'next/image';
import ProfileIconImage from '@/assets/images/profile-icon.png';

export const ProfileIcon = () => {
  return (
    <div className="rounded-full overflow-clip bg-gradient-to-br p-0.5 w-20 h-20 from-sky-300 to-sky-400 dark:from-sky-500 dark:to-sky-600">
      <div className="rounded-full overflow-clip">
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
