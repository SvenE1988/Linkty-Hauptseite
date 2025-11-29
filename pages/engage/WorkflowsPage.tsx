import React from 'react';

const WorkflowsPage: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-secondary to-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Workflows & Automation
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Automatisieren Sie wiederkehrende Prozesse und schaffen Sie Zeit für das
              Wesentliche: Beratung und Abschlüsse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-engage-primary mb-12">
            Typische Automation-Beispiele
          </h2>

          <div className="space-y-12">
            <div className="bg-engage-surface p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-engage-primary mb-4">
                Geburtstagskampagne
              </h3>
              <p className="text-gray-700 mb-4">
                2 Wochen vor Kundengeburtstag: Automatische E-Mail mit persönlichen Glückwünschen
                und speziellem Angebot. Follow-up 3 Tage später, wenn nicht geöffnet.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-engage-teal/20 text-engage-teal rounded-full text-sm">
                  E-Mail
                </span>
                <span className="px-3 py-1 bg-engage-secondary/20 text-engage-secondary rounded-full text-sm">
                  Zeitbasiert
                </span>
              </div>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-engage-primary mb-4">Jahrescheck</h3>
              <p className="text-gray-700 mb-4">
                6 Wochen vor Vertragsende: Automatische Erinnerung an Jahresgespräch. Termin-Link
                direkt in der E-Mail. 2 Wochen später: Follow-up per WhatsApp, wenn kein Termin
                vereinbart.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-engage-teal/20 text-engage-teal rounded-full text-sm">
                  E-Mail
                </span>
                <span className="px-3 py-1 bg-engage-accent/20 text-engage-accent rounded-full text-sm">
                  WhatsApp
                </span>
                <span className="px-3 py-1 bg-engage-secondary/20 text-engage-secondary rounded-full text-sm">
                  Kalender
                </span>
              </div>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-engage-primary mb-4">
                Lead-Nurturing-Sequenz
              </h3>
              <p className="text-gray-700 mb-4">
                Neuer Lead: Willkommens-E-Mail → 2 Tage: Infomaterial → 5 Tage: Persönliches
                Angebot → 7 Tage: Letzter Follow-up mit Dringlichkeit. Bei Öffnung: Automatische
                Benachrichtigung an Berater.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-engage-teal/20 text-engage-teal rounded-full text-sm">
                  Drip-Kampagne
                </span>
                <span className="px-3 py-1 bg-engage-primary/20 text-engage-primary rounded-full text-sm">
                  Lead-Scoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ihre Prozesse automatisieren</h3>
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

export default WorkflowsPage;
