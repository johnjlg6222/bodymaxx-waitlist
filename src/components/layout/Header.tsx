'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import LanguageToggle from '../ui/LanguageToggle';

export default function Header() {
  const t = useTranslations('header');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-1"
        >
          <span className="text-2xl font-bold text-white">{t('logo')}</span>
          <span className="text-2xl font-bold text-primary">{t('tagline')}</span>
        </motion.a>

        <LanguageToggle />
      </div>
    </motion.header>
  );
}
