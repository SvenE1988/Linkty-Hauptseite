import { Link2, CheckCircle } from 'lucide-react';
import { useCalendar } from '@/app/providers/CalendarProvider';

const integrations = [
  'Fondsfinanz',
  'Professional Works',
  'Blau Direkt',
  'NAFI',
  'Jung, DMS & Cie.',
  'Ihre bestehenden Systeme',
];

export const IntegrationsSection = () => {
  const { openCalendar } = useCalendar();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-engage-teal/10 text-engage-primary rounded-full text-sm font-semibold mb-6">
            <Link2 className="w-4 h-4" />
            Integrationen
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-4">
            Ergänzt statt ersetzt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linkty Engage ist White-Label-fähig und arbeitet nahtlos mit Ihren bestehenden
            Makler-Verwaltungsprogrammen zusammen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-6 bg-engage-surface rounded-xl border border-gray-200 hover:border-engage-teal hover:shadow-md transition-all"
            >
              <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0" />
              <span className="font-semibold text-engage-primary">{integration}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-engage-secondary to-engage-primary text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Sie nutzen bereits ein MVP?</h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Perfekt. Linkty Engage ergänzt Ihre bestehende Infrastruktur und macht daraus eine
            aktive Vertriebsmaschine – ohne Migration, ohne Datenverlust.
          </p>
          <button
            onClick={openCalendar}
            className="inline-block px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg"
          >
            Integration besprechen
          </button>
        </div>
      </div>
    </section>
  );
};
