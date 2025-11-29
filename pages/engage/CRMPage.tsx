import React from 'react';
import { Users, Calendar, Target, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Intelligente Kontaktverwaltung',
    description: 'Mehr als nur ein Adressbuch. Segmentieren Sie nach Potenzial, Vertragsart und Betreuungsbedarf.',
  },
  {
    icon: Calendar,
    title: 'Automatische Follow-ups',
    description: 'Geburtstage, Jahrestage, Vertragsenden – Ihr CRM erinnert Sie automatisch an jeden wichtigen Termin.',
  },
  {
    icon: Target,
    title: 'Lead-Scoring',
    description: 'Priorisieren Sie automatisch die vielversprechendsten Kontakte und nutzen Sie Ihre Zeit optimal.',
  },
  {
    icon: BarChart3,
    title: 'Performance-Tracking',
    description: 'Sehen Sie auf einen Blick, welche Kampagnen funktionieren und wo Optimierungsbedarf besteht.',
  },
];

const CRMPage: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-primary to-engage-secondary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              CRM, das aktiv verkauft
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Verwandeln Sie Ihren Kundenstamm in eine kontinuierliche Einnahmequelle. Unser CRM
              erinnert, qualifiziert und aktiviert – automatisch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-engage-teal/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-engage-teal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-engage-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-engage-surface rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-engage-primary mb-6">Anwendungsbeispiele</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
                <span>Automatische Geburtstagskampagnen mit personalisierten Angeboten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
                <span>Jahrescheck-Erinnerungen 6 Wochen vor Vertragsende</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
                <span>Cross-Selling-Vorschläge basierend auf Kundenverhalten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
                <span>Reaktivierung inaktiver Kunden mit gezielten Kampagnen</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Bereit, Ihr CRM zu aktivieren?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns besprechen, wie Linkty Engage Ihren Kundenstamm in eine
            Wachstumsmaschine verwandelt.
          </p>
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

export default CRMPage;
