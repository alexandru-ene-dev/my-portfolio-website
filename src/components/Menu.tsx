'use client';
import Image from 'next/image';
import Link from 'next/link'
import { type Dispatch, type SetStateAction } from 'react';
import Footer from './Footer';

import SocialIcons from './SocialIcons';
import CloseBtnIcon from '../../public/icons/close_btn.svg';
import clsx from 'clsx';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useRef } from 'react';


const Menu = (
  { setIsMenuVisible, isMenuVisible }:
  { 
    isMenuVisible: boolean,
    setIsMenuVisible: Dispatch<SetStateAction<boolean>>
  }
) => {
  const [ isMobile, isResizing ] = useIsMobile();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuVisible(false);
      }
    };
    
    if (isMenuVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuVisible, setIsMenuVisible]);


  return (
    <div
      ref={menuRef}
      inert={!isMenuVisible && isMobile}
      className={clsx(
        'fixed inset-0 z-10 max-w-100 bg-gray-300 dark:bg-[hsl(220,43%,9%)] p-5 font-bold overflow-y-auto -translate-x-full shadow-lg shadow-gray-500 dark:shadow-[hsl(220,43%,20%)] lg:shadow-none lg:p-3 lg:dark:bg-transparent lg:relative lg:max-w-full lg:translate-x-0 lg:opacity-100',
        isMenuVisible? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
        isMobile && !isResizing && 'transition-all duration-500',  
      )}>
      <button 
        onClick={() => setIsMenuVisible(false)}
        className="sticky top-0 block ml-auto lg:hidden cursor-pointer"
      >
        <Image className="invert dark:invert-0" src={CloseBtnIcon} width={30} height={30} alt='' />
      </button>

      <div className="flex flex-col gap-y-5 justify-between h-[calc(100%-44px)]">
        <nav>
          <ul className="flex flex-col text-lg lg:flex-row dark:text-gray-300">
            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#home"
            >Home</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#about"
            >About</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#projects"
            >Projects</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#skills"
            >Skills</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#blog"
            >Blog</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#resume"
            >Resume</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-2 lg:px-3 lg:hover:scale-115 lg:focus:scale-115 transition-[scale] duration-300" href="#contact"
            >Contact</Link>
          </ul>
        </nav>

        <div className="lg:hidden mt-8">
          <SocialIcons />

          <div className="text-sm text-gray-500 font-medium mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;