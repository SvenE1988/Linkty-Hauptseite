import React from 'react';

const stats = [
  {
    value: '85%',
    label: 'Zeitersparnis',
    description: 'Bei administrativen Aufgaben',
  },
  {
    value: '3x',
    label: 'Mehr Termine',
    description: 'Aus dem Bestand generiert',
  },
  {
    value: '24/7',
    label: 'Erreichbarkeit',
    description: 'Mit KI-Integration',
  },
  {
    value: '100%',
    label: 'White-Label',
    description: 'Ergänzt bestehende Systeme',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-engage-primary text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4">
            Zahlen, die überzeugen
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Messbare Ergebnisse für Ihre Vertriebsorganisation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-engage-accent mb-3">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
