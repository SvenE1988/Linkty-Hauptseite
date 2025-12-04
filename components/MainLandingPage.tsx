import React from 'react';
import Hero from './Hero';
import PinningSection from './PinningSection';
import HorizontalScroll from './HorizontalScroll';
import Footer from './Footer';

const MainLandingPage: React.FC = () => {
  return (
    <div className="bg-brand-navy min-h-screen selection:bg-brand-teal selection:text-brand-navy">
      {/*
        The main content wrapper.
        Relative z-10 ensures it scrolls OVER the fixed footer.
      */}
      <main className="relative z-10 bg-brand-navy mb-[65vh] sm:mb-[60vh] md:mb-[55vh] shadow-2xl shadow-black/80">
        <Hero />
        <PinningSection />
        <HorizontalScroll />

        {/* Spacer to ensure shadow visibility and clean break before footer */}
        <div className="h-6 sm:h-8 md:h-10 bg-brand-navy" />
      </main>

      {/* Fixed Footer behind the content */}
      <Footer />
    </div>
  );
};

export default MainLandingPage;
