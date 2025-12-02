import React from 'react';
import { ArrowRight, TrendingUp, Calendar, Euro, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCalendar } from '../../contexts/CalendarContext';
import BrowserFrame from './animated/BrowserFrame';
import FloatingCard from './animated/FloatingCard';
import BlurryBlob from './animated/BlurryBlob';

const EngageHero: React.FC = () => {
  const { openCalendar } = useCalendar();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 min-h-screen flex items-center bg-gray-50">
      <BlurryBlob
        color="cyan"
        size="lg"
        position={{ top: '10%', left: '-10%' }}
        opacity={0.2}
      />
      <BlurryBlob
        color="teal"
        size="md"
        position={{ bottom: '10%', right: '-5%' }}
        opacity={0.15}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-engage-teal/10 text-engage-primary border border-engage-teal/30 rounded-full text-sm font-semibold mb-6">
              Für Versicherungsmakler & Finanzdienstleister
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-engage-primary leading-tight tracking-tight mb-6">
              Mehr Umsatz durch System.
              <br />
              <span className="bg-gradient-to-r from-engage-primary via-engage-secondary to-engage-teal bg-clip-text text-transparent">
                Nicht durch Zufall.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Verwandeln Sie Ihre Datenbank in eine aktive Verkaufsmaschine. Mit automatisierten Follow-ups und intelligenten Workflows.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: 1500 }}
          >
            <BrowserFrame
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
              alt="Linkty Engage Dashboard mit Datenvisualisierung und CRM-Funktionen"
              className="shadow-2xl"
            />

            <FloatingCard
              icon={Users}
              text="Neuer Lead: Sarah M."
              subtext="vor 2 Minuten"
              position={{ top: '10%', left: '-5%' }}
              delay={0.8}
            />

            <FloatingCard
              icon={Euro}
              text="€12.450"
              subtext="diese Woche"
              position={{ top: '15%', right: '-5%' }}
              delay={1}
            />

            <FloatingCard
              icon={Calendar}
              text="3 Termine heute"
              subtext="14:00, 15:30, 17:00"
              position={{ bottom: '10%', left: '5%' }}
              delay={1.2}
            />

            <FloatingCard
              icon={TrendingUp}
              text="+45% Conversion"
              subtext="vs. letzter Monat"
              position={{ bottom: '15%', right: '5%' }}
              delay={1.4}
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button
              onClick={openCalendar}
              className="inline-flex items-center justify-center px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 group min-h-[48px]"
              aria-label="Jetzt Demo-Termin buchen"
            >
              Jetzt Demo buchen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-engage-primary font-semibold rounded-lg border-2 border-engage-primary hover:bg-engage-primary hover:text-white transition-all min-h-[48px]"
              aria-label="Mehr über Linkty Engage erfahren"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngageHero;
