import Image from "next/image";
import EmailIcon from '../../public/icons/email.png';
import LinkedInIcon from '../../public/icons/linkedin.png';
import GitIcon from '../../public/icons/git.png';
import DevIcon from '../../public/icons/dev.png';

const SocialIcons = () => {
  return (
    <ul>
      <li className="flex gap-3 justify-center items-center">
        <a 
          title="Send me a email" 
          href="mailto:alexandru.ene.dev@gmail.com" 
          aria-label="Send me an email"
        >
          <Image 
            className="dark:invert" 
            src={EmailIcon} 
            width={30} 
            height={30} 
            alt="Send me an Email" 
          />
        </a>

        <a 
          href="https://www.linkedin.com/in/alexandru-ene-dev" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert" 
            src={LinkedInIcon} 
            width={30} 
            height={30} 
            alt="Visit my LinkedIn Profile" 
          />
        </a>

        <a 
          href="https://github.com/alexandru-ene-dev" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image 
            className="dark:invert w-[30px] h-[30px]" 
            src={GitIcon} 
            width={30} 
            height={30} 
            alt="Check out my GitHub" 
          />
        </a>

        <a 
          href="https://dev.to/alexandru-ene-dev"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image 
            src={DevIcon} 
            width={30} 
            height={30} 
            alt="See my work on Dev.to" 
          />
        </a>
      </li>

      <li className="mt-2">
        <a 
          className="block text-center text-sm text-black dark:text-gray-300"
          href="mailto:alexandru.ene.dev@gmail.com" 
          aria-label="Send me an email"
        >
          alexandru.ene.dev@gmail.com
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;