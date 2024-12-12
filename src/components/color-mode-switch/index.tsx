'use client';
import { useEffect, useState } from 'react';

import { DarkMode } from '@/components/icons/dark-mode';
import { LightMode } from '@/components/icons/light-mode';

import { getColorMode, switchColorMode } from './utils';

export const ColorModeSwitch = () => {
  const [colorMode, setColorMode] = useState('dark');
  useEffect(() => {
    const colorMode = getColorMode();
    setColorMode(colorMode);
    switchColorMode(colorMode);
  }, []);

  return (
    <button
      onClick={() => {
        const newColorMode = colorMode === 'light' ? 'dark' : 'light';
        setColorMode(newColorMode);
        switchColorMode(newColorMode);
      }}
    >
      {colorMode === 'light' ? (
        <LightMode size={30} aria-label="Light Mode" />
      ) : (
        <DarkMode size={30} aria-label="Dark Mode" />
      )}
    </button>
  );
};
