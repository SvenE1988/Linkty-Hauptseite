import React from 'react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-xl font-bold text-engage-primary mt-6 mb-3">
            Allgemeine Hinweise
          </h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            2. Datenerfassung auf dieser Website
          </h2>
          <h3 className="text-xl font-bold text-engage-primary mt-6 mb-3">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h3 className="text-xl font-bold text-engage-primary mt-6 mb-3">
            Wie erfassen wir Ihre Daten?
          </h3>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            3. DSGVO-Konformität
          </h2>
          <p className="mb-4">
            Wir verarbeiten Ihre personenbezogenen Daten ausschließlich im Einklang mit der
            Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
          </p>

          <h3 className="text-xl font-bold text-engage-primary mt-6 mb-3">Ihre Rechte</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht</li>
          </ul>

          <h2 className="text-2xl font-bold text-engage-primary mt-8 mb-4">
            4. Kontaktformulare
          </h2>
          <p className="mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <div className="bg-engage-surface p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              Stand: {new Date().toLocaleDateString('de-DE')}<br />
              Diese Datenschutzerklärung ist ein Platzhalter. Bitte ersetzen Sie diesen Text mit
              Ihrer vollständigen, rechtssicheren Datenschutzerklärung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
