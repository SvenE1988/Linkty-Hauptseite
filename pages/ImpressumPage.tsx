import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import LegalHeader from '../components/legal/LegalHeader';
import SimpleLegalFooter from '../components/shared/SimpleLegalFooter';

const ImpressumPage: React.FC = () => {
  usePageTitle('Impressum | Linkty Group');

  return (
    <div className="min-h-screen bg-white">
      <LegalHeader title="Impressum" />

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-4">
              Linkty<br />
              Eine Marke der Erkens Holding GmbH<br />
              Haubenkopfstr. 12<br />
              76189 Karlsruhe
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Kontakt</h2>
            <p className="mb-4">
              Telefon: <a href="tel:+4972195279401" className="text-brand-teal hover:underline">+49 721 95279401</a><br />
              E-Mail: <a href="mailto:info@linkty.de" className="text-brand-teal hover:underline">info@linkty.de</a>
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
              Vertretungsberechtigte
            </h2>
            <p className="mb-4">
              Sven Erkens<br />
            
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mb-4">
              Sven Erkens<br />
              Haubenkopfstr. 12<br />
              76189 Karlsruhe
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
              Haftungsausschluss
            </h2>

            <h3 className="text-xl font-bold text-brand-navy mt-6 mb-3">
              Haftung für Inhalte
            </h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mt-6 mb-3">
              Haftung für Links
            </h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mt-6 mb-3">
              Urheberrecht
            </h3>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <div className="bg-brand-surface p-6 rounded-lg mt-12">
              <p className="text-sm text-gray-600">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SimpleLegalFooter variant="navy" />
    </div>
  );
};

export default ImpressumPage;
