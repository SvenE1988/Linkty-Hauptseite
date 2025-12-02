import React from 'react';
import GHLFormPlaceholder from './GHLFormPlaceholder';

const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-engage-teal/10 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-4">
            Bereit für das nächste Level?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie Linkty Engage Ihre Vertriebsprozesse
            transformieren kann.
          </p>
        </div>

        <GHLFormPlaceholder />

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-engage-teal rounded-full" />
            <span>Kostenlose Demo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-engage-teal rounded-full" />
            <span>Keine Kreditkarte nötig</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-engage-teal rounded-full" />
            <span>DSGVO-konform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
