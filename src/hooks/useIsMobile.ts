import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint: number = 1024) => {
  const [ isMobile, setIsMobile ] = useState<boolean>(true);
  const [ isResizing, setIsResizing ] = useState<boolean>(false); 


  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      setIsResizing(true); 

      resizeTimer = setTimeout(() => {
        setIsResizing(false);
      }, 200); 
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);


  useEffect(() => {
    const checkScreen = () => {
      const currentWindowSize = window.innerWidth;

      if (currentWindowSize >= breakpoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return [ isMobile, isResizing ];
};

export default useIsMobile;