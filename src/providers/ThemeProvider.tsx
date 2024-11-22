"use client"
import { useThemeStore } from '@/store/useThemeButton';
import { ReactNode, useEffect } from 'react';


const ThemeProvider = ({ children }:{children:ReactNode}) => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
