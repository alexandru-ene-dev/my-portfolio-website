'use client';
import ResumePic from '../../public/images/resume.webp';
import Chart from '../../public/images/chart.png';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Arrow from '../../public/icons/arrow.svg';


const Resume = () => {
  const ref = useScrollAnimation('left');
  
  return (
    <section ref={ref} id="resume" className="relative isolate mx-auto scroll-mt-[64px] lg:scroll-mt-[80px]">

    <div className="md:w-[60%] md:h-[60%] absolute right-0 -top-20 sm:top-70 sm:-left-10 -z-10 -rotate-15">
      <Image
        className="opacity-7 w-full h-full filter contrast-0" 
        src={Chart} 
        height={300} 
        width={300} 
        alt="" 
      />

      <div className="hidden md:absolute md:top-85 md:right-2 md:w-70 md:h-20 md:flex md:justify-end md:rotate-90 md:opacity-30 dark:opacity-30">
        <div className="md:bg-sky-500 md:h-full md:w-10 md:rounded-sm fill"></div>
      </div>

      <div className="hidden lg:absolute lg:top-91 lg:left-18 lg:w-60 lg:h-15 lg:flex lg:justify-end lg:rotate-92 lg:opacity-50 dark:opacity-30">
        <div className="lg:bg-blue-300 lg:h-full lg:w-50 lg:rounded-sm fill"></div>
      </div>
    </div>

      <div className="relative max-w-150">
        <h2 aria-label="Resume" className="flex gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Resume</h2>
        <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
      </div>

      <div className="max-w-120 mt-15 space-y-5 ml-auto mr-0">
        <p className="font-medium text-gray-600 text-lg dark:text-gray-200" >The resume is a more structured version of my progress so far. You can view it or download it here:</p>

        <a 
          href="/docs/Alexandru_Ene_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            className="rounded-lg dark:filter dark:brightness-90" 
            src={ResumePic} 
            height={500} 
            width={500} 
            alt="" 
          />
        </a>

        <a
          href="/docs/Alexandru_Ene_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          <span>View Resume</span>

          <Image 
            className="animate-pulse" 
            src={Arrow} 
            width={40} 
            height={40} 
            alt="" 
          />
        </a>

        <a
          href="/docs/Alexandru_Ene_Resume.pdf"
          download="Alexandru_Ene_Resume.pdf"
          className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          <span>Download Resume</span>

          <Image 
            className="animate-pulse" 
            src={Arrow} 
            width={40} 
            height={40} 
            alt="" 
          />
        </a>
      </div>
    </section>
  );
};

export default Resume;