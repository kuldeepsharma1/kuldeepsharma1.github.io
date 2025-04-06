'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type BeamSize = 'small' | 'medium' | 'large';
type BeamDirection = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';

interface BeamProps {
  direction: BeamDirection;
  size?: BeamSize;
  colorStart?: string;
  colorMiddle?: string;
  colorEnd?: string;
  className?: string;
}

export default function Beam({
  direction,
  size = 'medium',
  colorStart = '#18CCFC',
  colorMiddle = '#6344F5',
  colorEnd = '#AE48FF',
  className,
}: BeamProps) {
  const getTransform = (): string => {
    switch (direction) {
      case 'top':
        return 'rotate(0deg)';
      case 'top-right':
        return 'rotate(45deg)';
      case 'right':
        return 'rotate(90deg)';
      case 'bottom-right':
        return 'rotate(135deg)';
      case 'bottom':
        return 'rotate(180deg)';
      case 'bottom-left':
        return 'rotate(-135deg)';
      case 'left':
        return 'rotate(-90deg)';
      case 'top-left':
        return 'rotate(-45deg)';
      default:
        return 'rotate(0deg)';
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case 'small':
        return 'w-20 h-10 md:w-24 md:h-12';
      case 'medium':
        return 'w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24';
      case 'large':
        return 'w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32';
      default:
        return 'w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24';
    }
  };

  const gradientId = `grad-${direction}-${size}`;

  return (
    <svg
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(getSizeClass(), className)}
      style={{ transform: getTransform() }}
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke={`url(#${gradientId})`}
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          variants={{
            initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
            animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',

          }}
        >
          <stop stopColor={colorStart} stopOpacity="0" />
          <stop stopColor={colorStart} />
          <stop offset="0.325" stopColor={colorMiddle} />
          <stop offset="1" stopColor={colorEnd} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
