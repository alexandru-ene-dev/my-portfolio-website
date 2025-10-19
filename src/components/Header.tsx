'use client';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from './Hamburger';

import Menu from './Menu';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';


export default function Header() {
  const [ isMenuVisible, setIsMenuVisible ] = useState<boolean>(false);


  return (
    <header className="fixed left-0 right-0 z-30 flex justify-between items-center px-5 py-3 lg:py-1 max-w-[1400px] mx-auto lg:items-center bg-gray-300 overflow-x-clip
    after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-4 after:shadow-[0_4px_6px_rgba(0,0,0,0.15)] dark:after:shadow-[0_4px_6px_hsl(220,43%,17%)] after:z-[-10] dark:bg-[hsl(220,43%,4%)] text-black dark:text-gray-300
    ">
      <Hamburger setIsMenuVisible={setIsMenuVisible} />
      
      <Link 
        className="block font-bold flex-shrink-0" 
        href="#home"
      >
        <Image 
          className="dark:invert dark:opacity-90 hover:scale-110 focus:scale-110 transition-[scale] duration-300 w-[55px] h-[30px]" 
          src={logo} 
          width={55} 
          height={30} 
          alt="Alexandru Ene's logo" 
        />
      </Link>
      
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