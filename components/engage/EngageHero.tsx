import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const EngageHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-engage-teal/10 text-engage-primary rounded-full text-sm font-semibold">
              Für Versicherungsmakler & Finanzdienstleister
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-engage-primary leading-tight">
              Vom Verwalter zum{' '}
              <span className="text-engage-secondary">Vertriebsmotor</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ihr MVP verwaltet Akten. Linkty aktiviert Menschen. Verwandeln Sie Ihre bestehende
              Datenbank in eine aktive Verkaufsmaschine mit automatisierten Follow-ups und
              intelligenten Workflows.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Automatische Follow-ups</strong> – Kein Kunde wird mehr vergessen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Termine aus dem Bestand</strong> – Ihr CRM generiert aktiv Umsatz
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>White-Label Lösung</strong> – Ergänzt Fondsfinanz, PWX & Co.
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg hover:shadow-xl group min-h-[44px]"
                aria-label="Jetzt Demo-Termin buchen"
              >
                Jetzt Demo buchen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-engage-primary font-semibold rounded-lg border-2 border-engage-primary hover:bg-engage-primary hover:text-white transition-all min-h-[44px]"
                aria-label="Mehr über Linkty Engage erfahren"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=800&auto=format&fit=crop&dpr=2"
                alt="CRM Dashboard mit Datenvisualisierung, Kundenkontakten und Vertriebsstatistiken"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-engage-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-4xl font-bold text-engage-accent">85%</div>
              <div className="text-sm text-gray-600">Zeitersparnis</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-4xl font-bold text-engage-secondary">3x</div>
              <div className="text-sm text-gray-600">Mehr Termine</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-engage-surface to-transparent opacity-50 -z-10" />
    </section>
  );
};

export default EngageHero;
