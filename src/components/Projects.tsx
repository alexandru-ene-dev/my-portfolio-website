import ProjectPic from '../../public/images/project.png';
import Image from 'next/image';


const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto scroll-mt-[64px] lg:scroll-mt-[80px]">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150 ml-auto mr-0">
        <h2 aria-label="Projects" className="flex gap-5 justify-end text-[clamp(2.75rem,8vw,5rem)] font-bold text-right before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Projects</h2>
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

        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Fullstack web platform that features product listing and search, cart and favorites system and authentication </p>

        <a 
          href="https://progressio-ecommerce-website.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-lg text-center"
        >
          Show Project -&gt;
        </a>
      </div>
    </section>
  );
};

export default Projects;