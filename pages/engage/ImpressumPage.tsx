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
            [Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-700 mb-4">
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Vertreten durch
          </h2>
          <p className="text-gray-700 mb-4">[Name des Geschäftsführers]</p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Registereintrag
          </h2>
          <p className="text-gray-700 mb-4">
            Eintragung im Handelsregister<br />
            Registergericht: [Registergericht]<br />
            Registernummer: [Registernummer]
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Umsatzsteuer-ID
          </h2>
          <p className="text-gray-700 mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-gray-700 mb-4">
            [Name]<br />
            [Adresse]
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
