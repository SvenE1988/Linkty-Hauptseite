import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const businessUnits = [
  { 
    id: "engage", 
    name: "Linkty Engage", 
    focus: "Für Versicherungsmakler & Finanzdienstleister",
    headline: "Ihr MVP verwaltet Akten. Linkty aktiviert Menschen.",
    pitch: "Wir verwandeln Ihre bestehende Datenbank in eine aktive Verkaufsmaschine. Unser System automatisiert Follow-ups, generiert Termine aus dem Bestand und sorgt dafür, dass kein Kunde vergessen wird.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "CRM Dashboard mit Datenvisualisierung und Analytik für Finanzdienstleister",
    color: "from-blue-600 to-blue-400"
  },
  { 
    id: "voice", 
    name: "Linkty Voice", 
    focus: "Für Hausverwaltungen, Agenturen & Praxen",
    headline: "Gehen Sie ran, auch wenn Sie nicht da sind.",
    pitch: "Intelligente KI-Sprachbots, die Anrufe 24/7 entgegennehmen, qualifizieren und weiterleiten. Ihr digitaler Empfang, der niemals schläft – 100% Erreichbarkeit, 0% Stress.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Kommunikations-Wellenform und Audio-Visualisierung für KI-Telefonie",
    color: "from-teal-500 to-teal-300"
  },
  { 
    id: "studio", 
    name: "Linkty Studio", 
    focus: "Für Makler, KMU & Dienstleister",
    headline: "Webseiten, die nicht nur gut aussehen, sondern Kunden gewinnen.",
    pitch: "Wir bauen Webseiten, die Besucher gezielt in Anfragen verwandeln. Wir kombinieren technisches Verständnis für Ihre Branche mit hochwertigem Design für einen zukunftssicheren Außenauftritt.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Modernes Webdesign und Website-Struktur mit UI/UX Elementen",
    color: "from-indigo-600 to-purple-500"
  },
  { 
    id: "solutions", 
    name: "Linkty Solutions", 
    focus: "Für PV-Solateure & Vertriebsorganisationen",
    headline: "Wir übernehmen die Fleißarbeit. Ihr Team macht den Umsatz.",
    pitch: "Ob Lead-Scraping oder komplexe Schnittstellen: Wir bauen die technische Brücke, die Ihnen die manuelle Arbeit abnimmt, damit sich Ihr Team voll auf den Abschluss konzentrieren kann.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Programmier-Code und technische Automatisierungslösungen",
    color: "from-cyan-600 to-blue-600"
  },
];

const HorizontalScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-navy">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Title */}
        <div className="absolute top-8 left-8 z-10">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/10 tracking-tighter uppercase">
               Bereiche
             </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-8 md:pl-20 items-center">
          {/* Introductory Text Card */}
          <div className="min-w-[300px] md:min-w-[400px] text-white pr-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-brand-teal">Unser Ökosystem.</h3>
            <p className="text-slate-400 text-base sm:text-lg">
              Vier spezialisierte Einheiten, eine Mission: Ihr Unternehmen digital nach vorne zu bringen. Wischen Sie, um Lösungen zu entdecken.
            </p>
            <div className="mt-8 flex items-center gap-2 text-brand-blue animate-pulse">
              <span>Nach rechts scrollen</span>
              <span>→</span>
            </div>
          </div>

          {businessUnits.map((unit) => (
            <div 
              key={unit.id} 
              className="group relative h-[75vh] w-[85vw] md:w-[60vw] flex-shrink-0 overflow-hidden rounded-2xl bg-brand-surface border border-white/10 hover:border-brand-teal/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                 <img
                    src={unit.img}
                    alt={unit.imgAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-40 transition-transform duration-1000 ease-out group-hover:scale-110"
                 />
                 <div className={`absolute inset-0 bg-gradient-to-t ${unit.color} opacity-20 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-700`} />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/80 to-brand-navy" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
                 <div className="mb-auto pt-4 translate-y-4 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase text-brand-teal mb-4 backdrop-blur-md group-hover:bg-brand-teal/20 transition-colors">
                      {unit.focus}
                    </span>
                 </div>
                 
                 <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-none transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-lg">
                   {unit.name}
                 </h3>
                 
                 <div className="space-y-4 max-w-2xl transition-transform duration-500 group-hover:-translate-y-1">
                   <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors">
                     "{unit.headline}"
                   </h4>
                   <p className="text-slate-300 text-base md:text-lg leading-relaxed border-l-2 border-brand-teal pl-4 group-hover:text-slate-100 transition-colors">
                     {unit.pitch}
                   </p>
                 </div>

                 <Link
                   to={`/${unit.id}`}
                   className="mt-8 inline-block w-max px-8 py-3 bg-white text-brand-navy font-bold rounded transition-all duration-300 shadow-lg hover:bg-brand-teal hover:text-brand-navy group-hover:shadow-brand-teal/20"
                   aria-label={`Mehr über ${unit.name} erfahren - ${unit.focus}`}
                 >
                   Mehr erfahren
                 </Link>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default HorizontalScroll;