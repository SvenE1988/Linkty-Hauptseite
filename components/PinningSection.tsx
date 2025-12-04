import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// This section serves as the "Hub" logic: Problem -> Solution mechanics
const coreValues = [
  {
    kicker: "Die Herausforderung",
    title: "Daten ohne Strategie",
    description: "In einer digitalen Welt sammeln sich Daten an. Ohne Struktur sind sie nur Ballast. Wir verwandeln statische Informationen in dynamisches Wachstum.",
    color: "text-red-400"
  },
  {
    kicker: "Unsere Philosophie",
    title: "Technologie als Brücke",
    description: "Ob CRM, KI-Telefonie oder Webdesign – wir bauen keine Insellösungen. Linkty schafft Ökosysteme, in denen Ihre Prozesse nahtlos ineinandergreifen.",
    color: "text-brand-teal"
  },
  {
    kicker: "Das Ergebnis",
    title: "Skalierbarer Umsatz",
    description: "Wenn manuelle Fleißarbeit automatisiert wird und Ihr Außenauftritt überzeugt, hat Ihr Team endlich Zeit für das Wesentliche: Den Abschluss.",
    color: "text-brand-blue"
  }
];

const PinningSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-brand-navy text-white">
      <div className="relative flex flex-col xl:flex-row">
        
        {/* Sticky Visual Container */}
        <div className="xl:w-1/2 h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-navy to-brand-surface xl:border-r border-white/5">
           
           {/* Abstract Connected Nodes Visualization */}
           <motion.div 
             className="relative w-3/4 aspect-square"
             style={{
                rotate: useTransform(scrollYProgress, [0, 1], [0, 90]),
                scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
             }}
           >
              <div className="absolute inset-0 border border-brand-teal/20 rounded-full" />
              <div className="absolute inset-4 border border-brand-blue/20 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-tr from-brand-blue to-brand-teal rounded-2xl blur-3xl opacity-40"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="z-10 text-6xl font-black text-white/80 select-none">LINKTY</div>
              </div>
           </motion.div>
        </div>

        {/* Scrolling Text Content */}
        <div className="xl:w-1/2 relative z-10 flex flex-col justify-center bg-brand-navy/50 backdrop-blur-sm">
           <div className="min-h-screen flex flex-col justify-center gap-60 py-40 px-8 md:px-20">
              {coreValues.map((value, index) => (
                <FeatureBlock key={index} value={value} index={index} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const FeatureBlock: React.FC<{ value: any; index: number }> = ({ value, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
      transition={{ duration: 0.6 }}
      className="relative pl-8 border-l border-white/10"
    >
      <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${value.color}`}>
        {value.kicker}
      </span>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {value.title}
      </h3>
      <p className="text-slate-400 text-lg leading-relaxed max-w-md">
        {value.description}
      </p>
    </motion.div>
  );
};

export default PinningSection;