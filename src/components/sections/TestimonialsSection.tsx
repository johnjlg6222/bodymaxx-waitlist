'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import GlassCard from '../ui/GlassCard';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      key: 'testimonial1',
      gradient: 'from-primary to-purple-500',
      initials: 'MT',
    },
    {
      key: 'testimonial2',
      gradient: 'from-pink-500 to-rose-500',
      initials: 'SK',
    },
    {
      key: 'testimonial3',
      gradient: 'from-blue-500 to-cyan-500',
      initials: 'DL',
    },
    {
      key: 'testimonial4',
      gradient: 'from-emerald-500 to-teal-500',
      initials: 'ER',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.key} variants={itemVariants}>
              <GlassCard className="h-full" hover={false}>
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-primary/40 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Testimonial Quote */}
                <p className="text-white/80 italic text-base leading-relaxed mb-6">
                  &ldquo;{t(`${testimonial.key}.quote`)}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {t(`${testimonial.key}.name`)}
                    </p>
                    <p className="text-white/50 text-sm">
                      {t(`${testimonial.key}.role`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
