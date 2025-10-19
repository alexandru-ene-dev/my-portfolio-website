'use client'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';
import type { Dispatch, SetStateAction } from 'react';


export default function Footer(
  { isMenuVisible, setIsMenuVisible }:
  { 
    isMenuVisible: boolean,
    setIsMenuVisible: Dispatch<SetStateAction<boolean>>
  }
) {
  return (
    <footer className="space-y-5">
      <Link
        onClick={() => {
          if (isMenuVisible) setIsMenuVisible(false);
        }} 
        className="block font-bold hover:scale-110 focus:scale-110 transition-[scale] duration-300" 
        href="#home"
      >
        <Image className="block mx-auto dark:invert" src={logo} width={70} height={70} alt="Alexandru Ene's logo" />
      </Link>
      
      <div>
        &copy; 2025 Designed in <span className="font-medium text-gray-500 dark:text-gray-400">Figma</span>, created using <span className="font-medium text-gray-500 dark:text-gray-400">Next.js</span> and styled with <span className="font-medium text-gray-500 dark:text-gray-400">Tailwindcss</span> by <span className="font-medium text-gray-500 dark:text-gray-400">Alexandru Ene</span>. All rights reserved.
      </div>
    </footer>
  );
};