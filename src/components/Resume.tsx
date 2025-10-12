import ResumePic from '../../public/images/resume-button.png';
import Image from 'next/image';


const Resume = () => {
  return (
    <section id="resume" className="relative mx-auto scroll-mt-[64px] lg:scroll-mt-[80px]">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150">
        <h2 aria-label="Resume" className="flex gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Resume</h2>
        <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
      </div>

      <div className="max-w-120 mt-15 space-y-5 ml-auto mr-0">
        <p className="font-medium text-gray-600 text-lg dark:text-gray-200" >You can view or download my resume here:</p>

        <a 
          href="/docs/Alexandru_Ene_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            className="rounded-lg" 
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
          className="block bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          View Resume -&gt;
        </a>

      </div>

    </section>
  );
};

export default Resume;