'use client';
import { DarkMode } from '@/components/icons/dark-mode';
import { LightMode } from '@/components/icons/light-mode';
import { useColorMode } from './hooks';

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <LightMode size={32} aria-label="Light Mode" />
      ) : (
        <DarkMode size={32} aria-label="Dark Mode" />
      )}
    </button>
  );
};
