import ResumePic from '../../public/images/resume.png';
import Chart from '../../public/images/chart.png';
import Image from 'next/image';


const Resume = () => {
  return (
    <section id="resume" className="relative isolate mx-auto scroll-mt-[64px] lg:scroll-mt-[80px]">

      <Image
        className="block w-full h-full opacity-10 lg:object-fill lg:w-[60%] -left-10 absolute -z-10 filter contrast-0 -rotate-15" 
        src={Chart} 
        height={700} 
        width={700} 
        alt="" 
      />

      <div className="relative max-w-150">
        <h2 aria-label="Resume" className="flex gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Resume</h2>
        <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
      </div>

      <div className="max-w-120 mt-15 space-y-5 ml-auto mr-0">
        <p className="font-medium text-gray-600 text-lg dark:text-gray-200" >The resume is a more structured version of my progress so far. You can view or download it here:</p>

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
          className="block bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          View Resume -&gt;
        </a>

        <a
          href="/docs/Alexandru_Ene_Resume.pdf"
          download="Alexandru_Ene_Resume.pdf"
          className="block bg-black text-white dark:bg-gray-800 dark:text-gray-200 px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-600 focus:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          Download Resume -&gt;
        </a>

      </div>

    </section>
  );
};

export default Resume;