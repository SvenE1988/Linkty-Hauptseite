import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Typography effects
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "20%"]);

  // Image effects (revealing behind)
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  // **VERBESSERT: Startet bei 0.6 Deckkraft und endet bei 1.0 (volle Sichtbarkeit)**
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 1.0]); 

  return (
    <div ref={containerRef} className="h-[150vh] relative overflow-hidden bg-brand-navy">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Abstract Tech Image */}
        <motion.div 
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
           {/* Using a tech-abstract image */}
           <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Digital Network Abstract" 
            // **VERBESSERT: opacity-100 und saturate-0 entfernt (Bild ist nun farbig & voll sichtbar)**
            className="w-full h-full object-cover opacity-100 transition-all duration-1000"
          />
           {/* **VERBESSERT: Dunkles Overlay von /30 auf /15 reduziert** */}
           <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/15 to-transparent" />
           {/* Blue/Teal Overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 mix-blend-overlay" />
        </motion.div>

        {/* Hero Typography */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity, y: textY }}
          className="relative z-10 text-center pointer-events-none px-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
             {/* Logo representation */}
             <div className="w-12 h-12 border-4 border-brand-teal rounded-lg transform rotate-45" />
             <div className="w-12 h-12 border-4 border-brand-blue rounded-lg transform rotate-45 -ml-8 mix-blend-screen" />
          </div>
          <h1 className="text-[15vw] md:text-[12vw] leading-none font-sans font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-teal via-white to-brand-blue tracking-tighter">
            LINKTY
          </h1>
          <p className="text-lg md:text-2xl font-light text-brand-teal/80 mt-2 tracking-[0.3em] uppercase">
            Verbinden. Automatisieren. Wachsen.
          </p>
        </motion.div>
        
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce flex flex-col items-center gap-2"
        >
            <span className="uppercase tracking-widest text-xs">Starten Sie hier</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;