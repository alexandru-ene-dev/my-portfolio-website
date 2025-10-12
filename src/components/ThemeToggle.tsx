import LightMode from '../../public/icons/light-mode.svg';
import DarkMode from '../../public/icons/dark-mode.svg';
import Image from 'next/image';

const ThemeToggle = () => {
  return (
    <button className="cursor-pointer">
      <Image className="invert" src={LightMode} height={20} width={20} alt='' />
    </button>
  );
};

export default ThemeToggle;