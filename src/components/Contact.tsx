'use client';
import DecorativePic from '../../public/images/network-node.png';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Arrow from '../../public/icons/arrow.svg';


const Contact = () => {
  const ref = useScrollAnimation('right');

  return (
    <section id="contact" className="scroll-mt-[64px] lg:scroll-mt-[76px]">
      <div ref={ref} className="relative isolate">
        <div className="absolute top-0 bottom-0 -z-10 right-0 max-w-[800px]">
          <Image
            className="w-full h-full filter contrast-0 opacity-12 dark:opacity-15 object-cover" 
            src={DecorativePic} 
            height={1000} 
            width={1000} 
            alt="" 
          />
        </div>

        <div className="relative max-w-150 ml-auto mr-0">
          <h2 aria-label="Contact" className="flex justify-end gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold text-right before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Contact</h2>
          <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
        </div>

        <div className="max-w-120 mt-15 space-y-10">
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-black dark:text-gray-200">I&apos;m available for:</h3>

            <ul className="text-lg font-medium text-gray-600 dark:text-gray-300">
              <li>Open for work</li>
              <li>Freelance work</li>
              <li>Open-source contributions</li>
              <li>Collaborations</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xl text-black dark:text-gray-200">Reach out to me</h3>

            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-0">Send me a message and I will be in touch soon!</p>

            <a 
              href="mailto:alexandru.ene.dev@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center text-lg font-bold my-7 text-black dark:text-gray-200 hover:scale-110 focus:scale-110 transition-[scale] duration-300"
            >alexandru.ene.dev@gmail.com</a>

            <a
              href="https://www.linkedin.com/in/alexandru-ene-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
            >
              <span>Linkedin</span>

              <Image 
                className="animate-pulse" 
                src={Arrow} 
                width={40} 
                height={40} 
                alt="" 
              />
            </a>

            <a
              href=" https://github.com/alexandru-ene-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
            >
              <span>GitHub</span>

              <Image 
                className="animate-pulse" 
                src={Arrow} 
                width={40} 
                height={40} 
                alt="" 
              />
            </a>

            <a
              href="https://dev.to/alexandru-ene-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
            >
              <span>Dev.to</span>

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
      </div>

    </section>
  );
};

export default Contact;