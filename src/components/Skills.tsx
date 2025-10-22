'use client';
import SkillsList from './SkillsList';
import SkillsCarousel from './SkillsCarousel';
import lightBulbIcon from '../../public/icons/light-bulb.svg';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';


const Skills = () => {
  const ref = useScrollAnimation('left');


  return (
    <section  id="skills" className="scroll-mt-[59px] lg:scroll-mt-[76px]">
      <div ref={ref} className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute -z-20 top-[60%] left-[80%] 408:top-20 -translate-1/2 w-[500px] h-[500px] rounded-full dark:[background-image:radial-gradient(circle_at_center,_rgba(247,192,72,0.3)_0%,_transparent_50%)] animate-pulse"></div>
        </div>

        <div className="top-[60%] left-[80%] -translate-1/2 absolute 408:top-20 408:-rotate-20 flex justify-center items-center w-50 h-50 sm:w-70">
          <Image 
            className="opacity-5 dark:opacity-10 dark:invert" 
            src={lightBulbIcon} 
            width={300} 
            height={300} 
            alt=""
          />
        </div>

        <div className="relative max-w-150">
          <h2 aria-label="Skills" className="flex gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Skills</h2>
          <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
        </div>

        <div className="mx-auto mt-15 flex sm:justify-between flex-wrap gap-10 max-w-200">
          <SkillsList />
        </div>

        <SkillsCarousel />
      </div>
    </section>
  );
};

export default Skills;