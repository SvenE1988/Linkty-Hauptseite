import { ArrowRight, CheckCircle } from 'lucide-react';
import { useCalendar } from '@/app/providers/CalendarProvider';

export const EngageHero = () => {
  const { openCalendar } = useCalendar();

  return (
    <section className="relative overflow-hidden pt-20 pb-24 min-h-[80vh] flex items-center">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=1200&auto=format&fit=crop&dpr=2"
          alt="CRM Dashboard mit Datenvisualisierung und Analytik für Finanzdienstleister"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-engage-primary/95 via-engage-primary/85 to-engage-primary/75" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-engage-teal/20 text-white border border-white/30 rounded-full text-sm font-semibold">
              Für Versicherungsmakler & Finanzdienstleister
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight">
              Vom Verwalter zum <span className="text-engage-teal">Vertriebsmotor</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              Ihr MVP verwaltet Akten. Linkty aktiviert Menschen. Verwandeln Sie Ihre bestehende
              Datenbank in eine aktive Verkaufsmaschine mit automatisierten Follow-ups und
              intelligenten Workflows.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  <strong>Automatische Follow-ups</strong> – Kein Kunde wird mehr vergessen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  <strong>Termine aus dem Bestand</strong> – Ihr CRM generiert aktiv Umsatz
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  <strong>White-Label Lösung</strong> – Ergänzt Fondsfinanz, PWX & Co.
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openCalendar}
                className="inline-flex items-center justify-center px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg hover:shadow-xl group min-h-[44px]"
                aria-label="Jetzt Demo-Termin buchen"
              >
                Jetzt Demo buchen
                <ArrowRight
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-engage-primary font-semibold rounded-lg border-2 border-engage-primary hover:bg-engage-primary hover:text-white transition-all min-h-[44px]"
                aria-label="Mehr über Linkty Engage erfahren"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
              <div className="text-4xl font-bold text-engage-teal">85%</div>
              <div className="text-sm text-white">Zeitersparnis</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
              <div className="text-4xl font-bold text-engage-teal">3x</div>
              <div className="text-sm text-white">Mehr Termine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
