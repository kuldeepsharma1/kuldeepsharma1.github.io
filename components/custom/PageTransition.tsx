'use client';
import React, { useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimate,
  AnimationSequence,
} from 'framer-motion';
import { useGSAP } from '@gsap/react';

const ANIMATION_CONFIG = {
  transitionDuration: 0.8,
  visibilityDuration: 2.0,
  contentFadeDuration: 0.5,
  numberAnimationDuration: 0.6,
  countDuration: 2.5,
  progressBarDuration: 2.0,
  particles: {
    count: 20,
    size: '2px',
    duration: [1.5, 3]
  }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION_CONFIG.contentFadeDuration, ease: 'easeOut', delay: 0.1 },
  },
};


const numberVariants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.numberAnimationDuration,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2,
    },
  },
};


interface PageTransitionProps {
  onComplete: () => void;
}

const MaskPattern = () => (
  <svg className="absolute inset-0 w-full h-full animate-pulse " style={{ mixBlendMode: 'overlay' }}>
    <defs>
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);




const loadingTextVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};
export default function PageTransition({ onComplete }: PageTransitionProps): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(true);
  const [scope, animateSequence] = useAnimate();
  const count = useMotionValue(0);
  const displayCount = useTransform(count, Math.round);
  const loadingText = "Loading";
  useGSAP(() => {
    const counterAnimation = animate(count, 100, {
      duration: ANIMATION_CONFIG.countDuration,
      ease: [0.43, 0.13, 0.23, 0.96],
      onComplete: () => {
        setTimeout(exitAnimation, 500);
      }
    });

    const exitAnimation = async () => {
      const sequence: AnimationSequence = [
        ['.animated-number', { scale: 0.9, opacity: 0 }, { duration: 0.4 }],
        ['.transition-content', { opacity: 0 }, { duration: 0.3, at: '-0.2' }],
        ['.page-transition-overlay', { y: '-100%' }, { duration: 0.6, at: '-0.1' }]
      ];

      await animateSequence(sequence);
      setIsVisible(false);
      onComplete();
    };

    return () => counterAnimation.stop();
  }, [onComplete, animateSequence, count]);

  if (!isVisible) return null;

  return (
    <motion.section
      ref={scope}
      initial="hidden"
      animate="visible"
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
    >

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black" />
        <MaskPattern />
        <MaskPattern />
        <MaskPattern />
        <MaskPattern />
        <MaskPattern />
      </div>

      <motion.div
        variants={contentVariants}
        className="relati`ve h-full w-full flex items-center justify-center"
      >

        <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: ANIMATION_CONFIG.progressBarDuration, ease: 'linear' }}
            className="h-full w-full bg-white/50 origin-left"
          />
        </motion.div>
        <div className="relative flex flex-col items-center">
          <motion.div
            variants={numberVariants}
            className="animated-number relative text-[60vw] md:text-[15vw] font-black "
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.95)',
              color: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
            }}
          >
            <motion.span className="block relative z-10">
              {displayCount}
            </motion.span>
            <motion.span
              className="absolute inset-0 blur-[1px]"
              style={{
                WebkitTextStrokeWidth: '3px',
                WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.1)',
                color: 'transparent',
              }}
            >
              {displayCount}
            </motion.span>
          </motion.div>
          <motion.div
            variants={loadingTextVariants}
            initial="initial"
            animate="animate"
            className="mt-8 text-sm tracking-[0.3em] text-white/60 uppercase flex gap-1"
          >
            {loadingText.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

