import PictureOfMe from '../../public/images/me.jpg';
import PlayGuitarPic from '../../public/images/guitar.jpg';
import Image from 'next/image';


const About = () => {
  return (
    <section className="relative mx-auto flex justify-center items-center p-5">

      {/* <Image
        className="object-cover w-full h-full max-w-[800px] absolute right-0" 
        src={PlayGuitarPic} 
        height={500} 
        width={500} 
        alt="" 
      /> */}

      <div className="z-20 flex-grow">

        <div className="relative max-w-150">
          <h2 id="about" className="text-[clamp(3.25rem,8vw,5rem)] font-bold">&lt;About /&gt;</h2>
          <div className="bg-black h-2 absolute w-full"></div>
        </div>

        <div className="mt-15 max-w-100 mx-auto sm:flex sm:justify-center sm:gap-5 sm:max-w-300 md:max-w-240 lg:gap-10">
          <div className="max-w-[450px]">
            <Image
              className="w-full h-full object-cover" 
              src={PictureOfMe} 
              height={300} 
              width={300} 
              alt="A picture of me" 
            />
          </div>

          <div className="mt-5 space-y-5 sm:m-0 text-lg max-w-[450px] sm:w-1/2 font-medium text-gray-600">
            <p>
              Hi, I'm Alex, a self-taught fullstack web developer, focused on doing things right and leveling up.
            </p>

            <p>
              Over the past 12+ months of  consistent learning, the bugs and struggles have shaped me the most. They've taught me resilience and patience and made me care deeply about the quality of my work.
            </p>

            <p>
              I've been working with modern technologies like React, Next.js and MongoDB, growing more confident with every project, no matter how small.
            </p>

            <p>
              When I am not working, I find myself writing, drawing and playing the guitar and sometimes I play video games.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;