import { useCallback, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

const useDarkMode = () => {
  const [isDark, setDark] = useState(false);

  const toggleDark = useCallback(() => {
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    setDark(!isDark);
  }, [isDark]);

  useEffect(() => {
    const setting = localStorage.getItem('theme');
    if (
      setting === 'dark' ||
      (!setting && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDark(false);
    }
  }, [isDark]);

  return { isDark, toggleDark };
};

export default useDarkMode;
