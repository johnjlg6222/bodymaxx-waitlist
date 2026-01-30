'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { useIsMounted } from '@/hooks/useIsMounted';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const mounted = useIsMounted();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale prefix if it exists
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';

    // Build the new path
    const newPath = newLocale === 'fr' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 glass rounded-full p-1">
      {['fr', 'en'].map((lang) => {
        const isActive = locale === lang;
        const className = `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          isActive
            ? 'bg-primary text-white'
            : 'text-white/60 hover:text-white'
        }`;

        if (!mounted) {
          return (
            <button
              key={lang}
              onClick={() => switchLocale(lang)}
              className={className}
            >
              {lang.toUpperCase()}
            </button>
          );
        }

        return (
          <motion.button
            key={lang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => switchLocale(lang)}
            className={className}
          >
            {lang.toUpperCase()}
          </motion.button>
        );
      })}
    </div>
  );
}
