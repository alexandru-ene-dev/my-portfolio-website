import type { Dispatch, SetStateAction } from 'react';

const Hamburger = (
  { setIsMenuVisible }:
  { setIsMenuVisible: Dispatch<SetStateAction<boolean>> }
) => {
  return (
    <button
      onClick={() => setIsMenuVisible(prev => !prev)}
      className="flex flex-col gap-y-1 lg:hidden cursor-pointer"
    >
      <span className="h-[3px] w-[15px] bg-black"></span>
      <span className="h-[3px] w-[10px] bg-black"></span>
      <span className="h-[3px] w-[15px] bg-black"></span>
    </button>
  );
};

export default Hamburger;