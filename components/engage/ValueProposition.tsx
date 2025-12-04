import React from 'react';
import { AlertCircle, Zap, TrendingUp } from 'lucide-react';

const sections = [
  {
    kicker: 'Das Problem',
    title: 'Daten ohne Strategie',
    description:
      'Traditionelle MVPs verwalten nur Akten. Geburtstage, Vertragsenden und Cross-Selling-Potenziale bleiben ungenutzt. Ihr wertvollster Bestand schläft.',
    icon: AlertCircle,
    // TODO: Replace with Cloudinary/Supabase URL
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=60&w=800&dpr=2&auto=format&fit=crop',
    reverse: false,
  },
  {
    kicker: 'Unsere Lösung',
    title: 'Automatisierung mit System',
    description:
      'Linkty Engage aktiviert Ihren Bestand. Automatische Geburtstagskampagnen, Jahrescheck-Erinnerungen, Bedarfsanalysen – ohne dass Sie manuell eingreifen müssen.',
    icon: Zap,
    // TODO: Replace with Cloudinary/Supabase URL
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=60&w=800&dpr=2&auto=format&fit=crop',
    reverse: true,
  },
  {
    kicker: 'Das Ergebnis',
    title: 'Skalierbarer Umsatz',
    description:
      'Wenn Ihre Software aktiv für Sie arbeitet, haben Sie endlich Zeit für das Wesentliche: Beratungsgespräche und Abschlüsse. Ihre Kunden fühlen sich betreut, Ihr Team wird entlastet.',
    icon: TrendingUp,
    // TODO: Replace with Cloudinary/Supabase URL
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=60&w=800&dpr=2&auto=format&fit=crop',
    reverse: false,
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  section.reverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={section.reverse ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-engage-teal/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-engage-teal" />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-engage-teal">
                      {section.kicker}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-6 leading-tight">
                    {section.title}
                  </h2>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed border-l-4 border-engage-teal pl-6">
                    {section.description}
                  </p>
                </div>

                <div className={section.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-4">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
