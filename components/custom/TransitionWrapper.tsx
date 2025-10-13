// components/TransitionWrapper.tsx
'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import PageTransition from '@/components/custom/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasTransitioned = useRef(false); // Persistent flag to ensure one-time transition

  const handleRouteChange = useCallback(() => {
    if (!hasTransitioned.current) {
      setIsTransitioning(true);
      gsap.to('.page-content', {
        opacity: 0,
        y: 30,
        rotateX: '5deg',
        filter: 'blur(10px)',
        duration: 0.8,
        ease: 'expo.inOut',
      });
      hasTransitioned.current = true; // Mark as transitioned
    }
  }, []);

  useEffect(() => {
    handleRouteChange();
  }, [pathname, handleRouteChange]);

  const handleTransitionComplete = useCallback(() => {
    gsap.fromTo(
      '.page-content',
      { 
        opacity: 0, 
        y: 30, 
        rotateX: '-5deg',
        filter: 'blur(10px)' 
      },
      {
        opacity: 1,
        y: 0,
        rotateX: '0deg',
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'expo.out',
        onComplete: () => setIsTransitioning(false),
      }
    );
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition onComplete={handleTransitionComplete} />}
      </AnimatePresence>
      <div className="page-content min-h-screen">{children}</div>
    </motion.div>
  );
}