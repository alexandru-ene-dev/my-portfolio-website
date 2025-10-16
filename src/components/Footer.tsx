import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/icons/logo.png';


export default function Footer() {
  return (
    <footer className="space-y-5">
      <Link 
        className="block font-bold hover:scale-105 focus:scale-105 transition-[scale] duration-300" 
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