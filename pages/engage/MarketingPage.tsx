import React from 'react';

const MarketingPage: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-accent to-engage-secondary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Marketing, das konvertiert
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Kampagnen und Lead-Nurturing speziell für Finanzdienstleister. Automatisiert,
              personalisiert, wirksam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-engage-primary mb-12 text-center">
            Kampagnen-Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-engage-teal mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Drip-Kampagnen</h3>
              <p className="text-gray-600">Automatische E-Mail-Sequenzen für Lead-Nurturing</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-engage-secondary mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Segmentierung</h3>
              <p className="text-gray-600">Zielgruppenspezifische Kampagnen mit hoher Relevanz</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-engage-accent mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">Detaillierte Auswertungen und Conversion-Tracking</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Marketing-Automatisierung entdecken</h3>
          <a
            href="#demo"
            className="inline-block px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg"
          >
            Demo buchen
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;
