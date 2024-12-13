import { useSyncExternalStore } from 'react';
import { getColorMode, getNextColorMode, setColorMode } from './utils';

const listeners = new Set<() => void>();
const colorModeStore = {
  toggleColorMode() {
    setColorMode(getNextColorMode());
    listeners.forEach(listener => listener());
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    setColorMode(getColorMode());
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return getColorMode();
  },
  getServerSnapshot() {
    return 'dark';
  },
};
export const useColorMode = () => {
  const colorMode = useSyncExternalStore(
    colorModeStore.subscribe,
    colorModeStore.getSnapshot,
    colorModeStore.getServerSnapshot
  );
  return { colorMode, toggleColorMode: colorModeStore.toggleColorMode };
};
