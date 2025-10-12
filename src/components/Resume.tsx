import ResumePic from '../../public/images/resume-button.png';
import Image from 'next/image';


const Resume = () => {
  return (
    <section className="p-5 relative mx-auto">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150">
        <h2 className="text-[clamp(2.75rem,8vw,5rem)] font-bold">&lt;Resume /&gt;</h2>
        <div className="bg-black h-2 absolute w-full"></div>
      </div>

      <div className="max-w-120 mt-15 space-y-5 ml-auto mr-0">
        <p className="font-medium text-gray-600 text-lg" >You can view or download my resume here:</p>

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
          className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-center text-lg"
        >
          View Resume -&gt;
        </a>

      </div>

    </section>
  );
};

export default Resume;