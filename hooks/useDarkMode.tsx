import { THEME } from '@/lib/constants';
import { getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export type ThemeCode = 'dark' | 'light';
export function useDarkMode() {
  const [theme, setLocalTheme] = useState<ThemeCode>('light');

  useEffect(() => {
    const localTheme = getCookie(THEME) as ThemeCode;
    setLocalTheme(localTheme);
    document.documentElement.className = localTheme;
  }, []);

  const setTheme = (newTheme: ThemeCode) => {
    setCookie(THEME, newTheme);
    setLocalTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return { theme, setTheme };
}
