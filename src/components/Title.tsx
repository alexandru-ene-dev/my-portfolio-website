import LaptopPic from '../../public/images/laptop.jpg';
import Image from 'next/image';

const Title = () => {
  return (
    <section id="title" className="relative h-[100vh] max-w-[1400px] mx-auto flex items-center">
      <Image 
        className="object-cover w-full h-full max-w-[800px] contrast-100 saturate-100 right-0 absolute" 
        src={LaptopPic} 
        width={800} 
        height={800} 
        alt="" 
      />
      <div className="flex justify-center items-center absolute inset-0 z-20 px-3">
        <div className="flex-grow text-white xl:max-w-250">
          <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold">Alexandru Ene</h1>
          <h2 className="text-right font-bold text-[clamp(1rem,4vw,3rem)]">Fullstack Web Developer</h2>
        </div>
      </div> 
    </section>
  );
};

export default Title;