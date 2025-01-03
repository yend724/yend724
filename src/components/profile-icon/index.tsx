import Image from 'next/image';
import ProfileIconImage from '@/assets/images/profile-icon.png';

export const ProfileIcon = () => {
  return (
    <div className="aspect-square size-full overflow-hidden rounded-full bg-gradient-to-br from-sky-600 to-sky-700 p-0.5">
      <div className="overflow-hidden rounded-full">
        <Image
          src={ProfileIconImage}
          width={512}
          height={512}
          alt="YENDのプロフィールアイコン。スナメリのイラスト。"
          loading="eager"
          className="size-full"
        />
      </div>
    </div>
  );
};
