'use client';

import { motion, HTMLMotionProps } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { forwardRef, ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = true, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={twMerge(
          clsx(
            'glass rounded-2xl p-6',
            hover && 'glass-hover cursor-pointer',
            glow && 'glow-effect',
            className
          )
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
