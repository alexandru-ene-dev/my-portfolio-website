'use client'
import DecorPic from '../../public/images/blog-decor.png';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';


const Blog = () => {
  const ref = useScrollAnimation('right');

  
  return (
    <section ref={ref} id="blog" className="relative isolate mx-auto scroll-mt-[64px] lg:scroll-mt-[80px]">

      <Image
        className="block max-w-100 max-h-100 w-full h-full opacity-20 lg:opacity-25 lg:object-fill lg:w-[60%] right-0 absolute -top-20 md:max-w-400 md:max-h-400 md:top-0 -z-10 filter contrast-0 -rotate-20" 
        src={DecorPic} 
        height={700} 
        width={700} 
        alt="" 
      />

      <div className="relative max-w-150 ml-auto mr-0">
        <h2 aria-label="Blog" className="flex justify-end gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold text-right before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Blog</h2>
        <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
      </div>

      <div className="mt-15 space-y-5 max-w-120 text-lg font-medium text-gray-600 dark:text-gray-300">       
        <p>
          I  am documenting my learning journey on dev.to community, where I share things like technical insights, beginner-friendly tutorials and lessons from the challenges I run into.
        </p>
        
        <p>
          I realized writing and explaining concepts in a way that makes sense to me and (hopefully) to others, makes me a better developer. It's also my way of giving back. 
        </p>
        
        <p>You can read my posts there:</p>

        <a
          className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-300 text-lg text-center"
          target="_blank"
          rel="noopener noreferrer" 
          href="https://dev.to/alexandru-ene-dev"
        >
          Go to Dev.to -&gt;
        </a> 
        
        {/* <p>Or check them out right here on my website:</p>
        <Link
          className="block bg-black dark:bg-gray-800 dark:text-gray-200 text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center"
          href="/posts"
        >
          Go to Blog -&gt;
        </Link>  */}
      </div>
    </section>
  );
};

export default Blog;