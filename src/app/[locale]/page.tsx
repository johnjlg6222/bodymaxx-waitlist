import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/sections/HeroSection'),
  { ssr: false }
);

const FeaturesSection = dynamic(
  () => import('@/components/sections/FeaturesSection'),
  { ssr: false }
);

const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection'),
  { ssr: false }
);

const HowItWorksSection = dynamic(
  () => import('@/components/sections/HowItWorksSection'),
  { ssr: false }
);

const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection'),
  { ssr: false }
);

const CTASection = dynamic(
  () => import('@/components/sections/CTASection'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
