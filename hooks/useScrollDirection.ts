import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setIsAtTop(scrollY < 20);
      
      if (scrollY > prevOffset && scrollY > 20) {
        setScrollDirection('down');
      } else if (scrollY < prevOffset) {
        setScrollDirection('up');
      }
      
      setPrevOffset(scrollY);
    };

    window.addEventListener('scroll', toggleScrollDirection);
    return () => window.removeEventListener('scroll', toggleScrollDirection);
  }, [prevOffset]);

  return { scrollDirection, isAtTop };
}
