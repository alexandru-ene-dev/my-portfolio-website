'use client';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';
import useIsMobile from '@/hooks/useIsMobile';


export default function Header() {
  const [ isMenuVisible, setIsMenuVisible ] = useState<boolean>(false);
  const isMobile = useIsMobile();


  return (
    <header className="fixed left-0 right-0 z-30 flex justify-between items-center px-5 py-3 lg:py-1 max-w-[1400px] mx-auto lg:items-center bg-gray-300 overflow-x-clip
    after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-4 after:shadow-[0_4px_6px_rgba(0,0,0,0.15)] dark:after:shadow-[0_4px_6px_hsl(220,43%,17%)] after:z-[-10] dark:bg-[hsl(220,43%,4%)] text-black dark:text-gray-300
    ">
      <Hamburger setIsMenuVisible={setIsMenuVisible} />
      
      <Link className="font-bold hover:scale-115 focus:scale-115 transition-[scale] duration-300" href="#title">Alexandru Ene</Link>
      
      <div className="flex gap-5 items-center">
        <nav>
          <Menu 
            isMenuVisible={isMenuVisible} 
            setIsMenuVisible={setIsMenuVisible} 
          /> 
        </nav>
  
        <ThemeToggle />
      </div>
    </header>
  );
};