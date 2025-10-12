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
    <header className="fixed left-0 right-0 z-30 flex justify-between p-5 max-w-[1400px] mx-auto lg:items-center">
      <Hamburger setIsMenuVisible={setIsMenuVisible} />
      
      <Link href="#title">Alexandru Ene</Link>
      
      <div className="flex gap-5">
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