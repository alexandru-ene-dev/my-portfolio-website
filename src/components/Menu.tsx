'use client'
import Link from 'next/link'
import { type Dispatch, type SetStateAction } from 'react';
import Footer from './Footer';
import SocialIcons from './SocialIcons';
import clsx from 'clsx';
import useIsMobile from '@/hooks/useIsMobile';


const Menu = (
  { setIsMenuVisible, isMenuVisible }:
  { 
    isMenuVisible: boolean,
    setIsMenuVisible: Dispatch<SetStateAction<boolean>>
  }
) => {
  const [ isMobile, isResizing ] = useIsMobile();


  return (
    <div 
      className={clsx(
        'fixed inset-0 z-10 max-w-100 bg-gray-300 p-5 font-bold overflow-y-auto -translate-x-full lg:p-3 lg:bg-transparent lg:relative lg:max-w-full  lg:translate-x-0 lg:opacity-100',
        isMenuVisible? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
        isMobile && !isResizing && 'transition-all duration-500',  
      )}>
      <button 
        onClick={() => setIsMenuVisible(false)}
        className="sticky top-0 block ml-auto lg:hidden cursor-pointer"
      >X</button>

      <div className="flex flex-col gap-y-5 justify-between h-[calc(100%-44px)]">
        <nav>
          <ul className="flex flex-col lg:flex-row ">
            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#home"
            >Home</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#about"
            >About</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#projects"
            >Projects</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#skills"
            >Skills</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#blog"
            >Blog</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#resume"
            >Resume</Link>

            <Link 
              onClick={() => setIsMenuVisible(false)} 
              className="p-1 lg:px-3 lg:hover:scale-120 transition-all duration-300" href="#contact"
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