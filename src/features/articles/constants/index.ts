import QiitaIcon from '@/assets/images/qiita-icon.png';
import ZennIcon from '@/assets/images/zenn-icon.svg';
import ProfileIcon from '@/assets/images/profile-icon.png';

export const PLATFORM_ICON_MAP = {
  zenn: {
    label: 'Zenn',
    icon: ZennIcon,
  },
  qiita: {
    label: 'Qiita',
    icon: QiitaIcon,
  },
  yend: {
    label: 'YEND',
    icon: ProfileIcon,
  },
};

export const FILTER = {
  zenn: true,
  qiita: true,
  yend: true,
} as const;
export const FILTER_MAP = {
  zenn: 'Zenn',
  qiita: 'Qiita',
  yend: 'YEND',
} as const;
export const FILTER_KEYS = Object.keys(FILTER) as (keyof typeof FILTER)[];
