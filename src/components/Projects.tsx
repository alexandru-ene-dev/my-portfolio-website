'use client';
import ProjectPic from '../../public/images/project.webp';
import DecorPic from '../../public/images/code.png';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Arrow from '../../public/icons/arrow.svg';


const Projects = () => {
  const ref = useScrollAnimation('right');
  
  return (
    <section  
      id="projects" 
      className="scroll-mt-[59px] lg:scroll-mt-[76px]"
    >
      <div ref={ref} className="relative isolate">
        <Image
          className="opacity-20 dark:opacity-25 lg:opacity-25 lg:object-fill lg:w-[60%] absolute -z-10 filter contrast-0 max-w-150 max-h-150 -top-10 left-0 sm:right-0 sm:left-auto sm:max-w-700 sm:max-h-700" 
          src={DecorPic} 
          height={350} 
          width={700}
          alt="" 
        />

        <div className="relative max-w-150 ml-auto mr-0">
          <h2 
            aria-label="Projects" 
            className="flex gap-5 justify-end text-[clamp(2.75rem,8vw,5rem)] font-bold text-right before:content-['<'] after:content-['/>'] text-black dark:text-gray-200"
          >Projects</h2>
          <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
        </div>

        <div className="mt-15 space-y-5 max-w-120">
          <Image
            className="" 
            src={ProjectPic} 
            height={500} 
            width={500} 
            alt="" 
          />

          <h3 className="text-lg font-bold text-black dark:text-gray-200">Progressio - E-commerce Web Platform</h3>

          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Fullstack web platform that features product listing and search, cart and favorites system and authentication. Built with React, Express, MongoDB and Typescript. Deployed with Vercel and Render.</p>

          <a 
            href="https://progressio-ecommerce-website.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-lg text-center"
          >
            <span>Show Project</span>

            <Image 
              className="animate-pulse" 
              src={Arrow} 
              width={40} 
              height={40} 
              alt="" 
            />
          </a>

          <a 
            href="https://github.com/alexandru-ene-dev/ecommerce-website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-lg text-center mt-5"
          >
            <span>See on GitHub</span>

            <Image 
              className="animate-pulse" 
              src={Arrow} 
              width={40} 
              height={40} 
              alt="" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;