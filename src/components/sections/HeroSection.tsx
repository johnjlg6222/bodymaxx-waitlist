'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import EmailForm from '../ui/EmailForm';
import WaitlistCounter from '../ui/WaitlistCounter';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {t('headline')}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-gradient"
            >
              {t('tagline')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/60 max-w-lg"
            >
              {t('description')}
            </motion.p>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <EmailForm className="max-w-lg" />
            </motion.div>

            {/* Counter */}
            <WaitlistCounter />
          </div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-72">
              {/* Phone Frame */}
              <div className="relative glass rounded-[3rem] p-3 glow-effect">
                <div className="bg-background-secondary rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-background">
                    <span className="text-xs text-white/60">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" opacity="0.3"/>
                        <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z"/>
                      </svg>
                      <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                      </svg>
                    </div>
                  </div>

                  {/* App Content Preview */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/40 text-xs">Bonjour</p>
                        <p className="text-white font-semibold">Alex</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                    </div>

                    {/* Body Scan Card */}
                    <div className="glass rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-xs">Body Scan</span>
                        <span className="text-primary text-xs">Nouveau</span>
                      </div>
                      <div className="flex items-center justify-center py-6">
                        <div className="relative">
                          <div className="w-16 h-24 border-2 border-primary/50 rounded-full opacity-50" />
                          <motion.div
                            animate={{ y: [-30, 30] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(10,132,255,0.8)]"
                          />
                        </div>
                      </div>
                      <div className="bg-primary/20 rounded-xl py-2 text-center">
                        <span className="text-primary text-sm font-medium">Commencer le scan</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Masse', value: '78.5', unit: 'kg' },
                        { label: 'Muscle', value: '42', unit: '%' },
                        { label: 'Graisse', value: '18', unit: '%' },
                      ].map((stat) => (
                        <div key={stat.label} className="glass rounded-xl p-2 text-center">
                          <p className="text-white/40 text-[10px]">{stat.label}</p>
                          <p className="text-white font-bold text-sm">{stat.value}</p>
                          <p className="text-primary text-[10px]">{stat.unit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
