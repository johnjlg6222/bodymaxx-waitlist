'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl';

interface WaitlistCounterProps {
  targetNumber?: number;
  className?: string;
}

export default function WaitlistCounter({ targetNumber = 2847, className }: WaitlistCounterProps) {
  const t = useTranslations('hero');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={className}
    >
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-medium"
              style={{
                zIndex: 4 - i,
              }}
            >
              {['A', 'M', 'S', 'L'][i]}
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm">
          {t('counterPrefix')}{' '}
          <span className="text-white font-bold tabular-nums">
            {count.toLocaleString()}+
          </span>{' '}
          {t('counterSuffix')}
        </p>
      </div>
    </motion.div>
  );
}
