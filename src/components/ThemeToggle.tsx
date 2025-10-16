'use client';
import LightMode from '../../public/icons/light-mode.svg';
import DarkMode from '../../public/icons/dark-mode.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const ThemeToggle = () => {
  const getInitialTheme = () => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false; 
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme());

  const toggleTheme = () => {
    setIsDark(prev => !prev)
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark? 'light' : 'dark');
  };

  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const themeSync = (e: MediaQueryListEvent | MediaQueryList) => {
      const theme = localStorage.getItem('theme');
  
      if (!theme) {
        setIsDark(e.matches);

        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
      }
    };

    themeSync(mediaQuery);

    mediaQuery.addEventListener('change', themeSync);
    return () => mediaQuery.removeEventListener('change', themeSync);
  }, []);

  
  return (
    <button 
      onClick={toggleTheme} 
      className="cursor-pointer w-[25px] h-[25px] hover:scale-120 focus:scale-120 transition-[scale] duration-300"
      suppressHydrationWarning
    >

      <Image className="hidden dark:block" src={LightMode} height={25} width={25} alt='' />
      <Image className="invert dark:hidden" src={DarkMode} height={25} width={25} alt='' />
    </button>
  );
};

export default ThemeToggle;