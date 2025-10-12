import ProjectPic from '../../public/images/project.png';
import Image from 'next/image';


const Projects = () => {
  return (
    <section className="p-5 relative mx-auto">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150 ml-auto mr-0">
        <h2 id="projects"className="text-[clamp(2.75rem,8vw,5rem)] font-bold text-right">&lt;Projects /&gt;</h2>
        <div className="bg-black h-2 absolute w-full"></div>
      </div>

      <div className="mt-15 space-y-5 max-w-120">
        <Image
          className="" 
          src={ProjectPic} 
          height={500} 
          width={500} 
          alt="" 
          />

        <h3 className="text-lg font-bold">Progressio - E-commerce Web Platform</h3>

        <p className="text-lg font-medium text-gray-600">Fullstack web platform that features product listing and search, cart and favorites system and authentication </p>

        <a 
          href="https://progressio-ecommerce-website.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-lg text-center"
        >
          Show Project -&gt;
        </a>
      </div>
    </section>
  );
};

export default Projects;