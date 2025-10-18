'use client';
import PictureOfMe from '../../public/images/me.webp';
import CogIcon from '../../public/images/cog.png';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';


const About = () => {
  const ref = useScrollAnimation('left');

  return (
    <section
      ref={ref} 
      id="about" 
      className="relative isolate mx-auto sm:flex sm:justify-center sm:items-center scroll-mt-[64px] lg:scroll-mt-[80px]"
    >
      <Image
        className="absolute -z-20 top-0 right-0 opacity-4 dark:opacity-8 max-w-40 dark:invert spin"  
        src={CogIcon} 
        height={200} 
        width={200} 
        alt="" 
      />

      <Image
        className="absolute -z-20 top-20 right-30 opacity-4 dark:opacity-8 max-w-40 dark:invert reverse-spin" 
        src={CogIcon} 
        height={200} 
        width={200} 
        alt="" 
      />

      <Image
        className="absolute -z-20 top-100 -left-10 opacity-3 dark:opacity-8 max-w-50 sm:max-w-70 dark:invert spin" 
        src={CogIcon} 
        height={700} 
        width={700} 
        alt="" 
      />

      <div className="z-20 flex-grow">
        <div className="relative max-w-150">
          <h2 aria-label="About" className="flex gap-5 text-[clamp(3.25rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">About</h2>
          <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
        </div>

        <div className="mt-15 max-w-100 mx-auto sm:flex sm:justify-center sm:gap-5 sm:max-w-300 md:max-w-240 lg:gap-10">
          <div className="relative max-w-[450px] isolate">
            <Image
              className="w-full h-full object-cover aspect-auto rounded-full filter saturate-100" 
              src={PictureOfMe} 
              height={300} 
              width={300} 
              alt="A picture of me" 
            />
          </div>

          <div className="mt-5 space-y-5 sm:m-0 text-lg max-w-[450px] sm:w-1/2 font-medium text-gray-600 dark:text-gray-300 text-justify">
            <p>
              Hi, I&apos;m Alex, a self-taught fullstack web developer, focused on doing things right and leveling up.
            </p>

            <p>
              Over the past 12+ months of  consistent learning, the bugs and struggles have shaped me the most as a developer. They&apos;ve taught me resilience and patience and made me care deeply about the quality of my work.
            </p>

            <p>
              I&apos;ve been working with modern technologies like React, Next.js and MongoDB, growing more confident with every project, no matter how small.
            </p>

            <p>
              When I am not working, I find myself writing, drawing and playing the guitar and sometimes I play video games.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;