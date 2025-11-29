import React from 'react';

const ImpressumPage: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-gray-700 mb-4">
            Linkty Engage<br />
            Eine Marke der Erkens Holding GmbH<br />
            Haubenkopfstr. 12<br />
            76189 Karlsruhe
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-700 mb-4">
            Telefon: <a href="tel:+4972195279401" className="text-engage-accent hover:underline">+49 721 95279401</a><br />
            E-Mail: <a href="mailto:info@linkty.de" className="text-engage-accent hover:underline">info@linkty.de</a>
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Vertretungsberechtigte
          </h2>
          <p className="text-gray-700 mb-4">
            Sven Erkens<br />
            Emir Corbo
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-gray-700 mb-4">
            Sven Erkens und Emir Corbo<br />
            Haubenkopfstr. 12<br />
            76189 Karlsruhe
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
