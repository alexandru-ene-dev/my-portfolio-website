import ProjectPic from '../../public/images/project.png';
import Image from 'next/image';
import SkillsList from './SkillsList';


const Skills = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto p-5">

      {/* <Image
        className="object-cover w-full h-full  max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="relative max-w-150">
        <h2 className="text-[clamp(2.75rem,8vw,5rem)] font-bold">&lt;Skills /&gt;</h2>
        <div className="bg-black h-2 absolute w-full"></div>
      </div>

      <div className="mx-auto mt-15 flex justify-between flex-wrap gap-10 max-w-150">
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;