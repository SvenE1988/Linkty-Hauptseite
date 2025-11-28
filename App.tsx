import React from 'react';
import Hero from './components/Hero';
import PinningSection from './components/PinningSection';
import HorizontalScroll from './components/HorizontalScroll';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-navy min-h-screen selection:bg-brand-teal selection:text-brand-navy">
      {/* 
        The main content wrapper. 
        Relative z-10 ensures it scrolls OVER the fixed footer.
      */}
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

export default App;