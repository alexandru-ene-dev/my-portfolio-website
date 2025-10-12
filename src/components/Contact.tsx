import ResumePic from '../../public/images/resume-button.png';
import Image from 'next/image';


const Contact = () => {
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
        <h2 className="text-[clamp(2.75rem,8vw,5rem)] font-bold text-right">&lt;Contact /&gt;</h2>
        <div className="bg-black h-2 absolute w-full"></div>
      </div>

      <div className="max-w-120 mt-15 space-y-10">
        <div className="space-y-3">
          <h3 className="font-bold text-xl">I'm available for:</h3>

          <ul className="text-lg font-medium text-gray-600">
            <li>Open for work</li>
            <li>Freelance work</li>
            <li>Open-source contributions</li>
            <li>Collaborations</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-xl">Reach out to me</h3>
          <p className="text-lg font-medium text-gray-600">Send me a message and I will be in touch soon!</p>
          <p className="text-center text-lg font-bold my-7">alexandru.ene.dev@gmail.com</p>

          <a
            href="https://www.linkedin.com/in/alexandru-ene-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-center text-lg"
          >
            LinkedIn -&gt;
          </a>

          <a
            href=" https://github.com/alexandru-ene-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-center text-lg"
          >
            GitHub -&gt;
          </a>

          <a
            href="https://dev.to/alexandru-ene-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-black text-white px-5 py-3 w-full cursor-pointer font-bold rounded-md hover:bg-gray-700 transition-colors duration-300 text-center text-lg"
          >
            Dev.to -&gt;
          </a> 
        </div>
      </div>

    </section>
  );
};

export default Contact;