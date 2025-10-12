import LightMode from '../../public/icons/light-mode.svg';
import DarkMode from '../../public/icons/dark-mode.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const ThemeToggle = () => {
  const [ isDark, setIsDark ] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev)
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark? 'light' : 'dark');
  };

  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const themeSync = (e: MediaQueryListEvent | MediaQueryList) => {
      const theme = localStorage.getItem('theme');
  
      if (theme === 'dark' || (!theme && e.matches)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else if (!e.matches) {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    };

    themeSync(mediaQuery);

    mediaQuery.addEventListener('change', themeSync);
    return () => mediaQuery.removeEventListener('change', themeSync);
  }, []);

  
  return (
    <button onClick={toggleTheme} className="cursor-pointer w-[25px] h-[25px] hover:scale-120 focus:scale-120 transition-[scale] duration-300">
      {isDark? 
        <Image src={LightMode} height={25} width={25} alt='' />
        :
        <Image className="invert" src={DarkMode} height={25} width={25} alt='' />
      }
    </button>
  );
};

export default ThemeToggle;