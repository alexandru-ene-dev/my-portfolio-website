'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


const useScrollAnimation = (direction: string) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const scope = ref.current;

    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {    

      gsap.from(scope, {
        opacity: 0,
        scale: 0.85,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: scope,
          start: "top 70%", 
          toggleActions: "play none none reverse",
        },
      });

      }, scope); 

      return () => ctx.revert(); 

  }, [direction]); 

  return ref;
};

export default useScrollAnimation;