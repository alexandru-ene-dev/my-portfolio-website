import ProjectPic from '../../public/images/project.png';
import Image from 'next/image';
import SkillsList from './SkillsList';


const Skills = () => {
  return (
    <section id="skills" className="relative max-w-[1400px] mx-auto scroll-mt-25">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150">
        <h2 aria-label="Skills" className="flex gap-5 text-[clamp(2.75rem,8vw,5rem)] font-bold before:content-['<'] after:content-['/>'] text-black dark:text-gray-200">Skills</h2>
        <div className="bg-black dark:bg-gray-200 h-[6px] lg:h-2 absolute w-full"></div>
      </div>

      <div className="mx-auto mt-15 flex justify-between flex-wrap gap-10 max-w-150">
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;