import LightMode from '../../public/icons/light-mode.svg';
import DarkMode from '../../public/icons/dark-mode.svg';
import { useState } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
  const [ isDark, setIsDark ] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDark(prev => !prev)
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {isDark? 
        <Image className="invert" src={LightMode} height={20} width={20} alt='' />
        :
        <Image className="invert" src={DarkMode} height={20} width={20} alt='' />
      }
    </button>
  );
};

export default ThemeToggle;