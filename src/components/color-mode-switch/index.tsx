'use client';
import { DarkMode } from '@/components/icons/dark-mode';
import { LightMode } from '@/components/icons/light-mode';
import { useColorMode } from './hooks';

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button
      onClick={toggleColorMode}
      className="neumorphism-shadow p-3 rounded-full"
    >
      {colorMode === 'light' ? (
        <LightMode size={28} aria-label="Light Mode" />
      ) : (
        <DarkMode size={28} aria-label="Dark Mode" />
      )}
    </button>
  );
};
