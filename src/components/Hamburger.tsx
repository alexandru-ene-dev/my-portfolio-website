'use client';
import type { Dispatch, SetStateAction } from 'react';


const Hamburger = (
  { setIsMenuVisible }:
  { setIsMenuVisible: Dispatch<SetStateAction<boolean>> }
) => {
  return (
    <button
      onClick={() => setIsMenuVisible(prev => !prev)}
      className="flex flex-col gap-y-1 lg:hidden cursor-pointer p-2 hover:scale-120 focus:scale-120 transition-scale duration-500"
    >
      <span className="h-[4px] w-[22px] bg-black dark:bg-gray-300"></span>
      <span className="h-[3px] w-[15px] bg-black dark:bg-gray-300"></span>
      <span className="h-[4px] w-[22px] bg-black dark:bg-gray-300"></span>
    </button>
  );
};

export default Hamburger;