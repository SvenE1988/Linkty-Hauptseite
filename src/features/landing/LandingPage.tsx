import { Hero } from '@/features/landing/components/Hero';
import { PinningSection } from '@/features/landing/components/PinningSection';
import { HorizontalScroll } from '@/features/landing/components/HorizontalScroll';
import { Footer } from '@/shared/components/layout/Footer';

export const LandingPage = () => {
  return (
    <div className="bg-brand-navy min-h-screen selection:bg-brand-teal selection:text-brand-navy">
      {/* Main content wrapper - scrolls OVER the fixed footer */}
      <main className="relative z-10 bg-brand-navy mb-[60vh] shadow-2xl shadow-black/80">
        <Hero />
        <PinningSection />
        <HorizontalScroll />

        {/* Spacer to ensure shadow visibility and clean break before footer */}
        <div className="h-24 bg-brand-navy" />
      </main>

      {/* Fixed Footer behind the content */}
      <Footer />
    </div>
  );
};
