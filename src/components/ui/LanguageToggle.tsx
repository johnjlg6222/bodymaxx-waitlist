'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale prefix if it exists
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';

    // Build the new path
    const newPath = newLocale === 'fr' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 glass rounded-full p-1">
      {['fr', 'en'].map((lang) => (
        <motion.button
          key={lang}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLocale(lang)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            locale === lang
              ? 'bg-primary text-white'
              : 'text-white/60 hover:text-white'
          }`}
          suppressHydrationWarning
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
