import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const SolutionsPlaceholder: React.FC = () => {
  usePageTitle('Linkty Solutions | Automatisierung & Lead-Scraping');
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {showCalendar && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowCalendar(false)}>
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              ×
            </button>
            <div className="p-6">
              <iframe
                src="https://link.linkty.ai/widget/bookings/linkty-erstgespraech"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="EAqjBUlT5vgXjUg1UxFG_solutions"
              />
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-solutions-accent/10 to-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a88bf96dd5b457dc43cf7.png"
                alt="Linkty Solutions"
                className="h-10"
              />
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://login.linkty.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-solutions-accent transition-colors"
              >
                Portalzugang
              </a>
              <Link
                to="/"
                className="text-sm font-semibold text-gray-600 hover:text-solutions-accent transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-solutions-accent/20 text-solutions-primary rounded-full text-sm font-semibold mb-8">
              <CheckCircle2 className="w-5 h-5" />
              Technische Lösungen bereits im Einsatz
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Linkty Solutions ist produktiv – die Webseite wird aktualisiert
            </h1>

            <p className="text-2xl md:text-3xl text-solutions-primary font-bold mb-6">
              Wir übernehmen die Fleißarbeit. Ihr Team macht den Umsatz.
            </p>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sonderprogrammierung, Lead-Scraping & Automatisierung für Vertriebsorganisationen.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-solutions-primary to-solutions-accent text-white rounded-2xl p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Technische Lösungen, die schon heute Ihre Prozesse vereinfachen
                </h2>
              </div>
            </div>

            {/* Das Problem */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Das Problem kennen Sie</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ihr Team verbringt Stunden mit manueller Recherche. Lead-Listen müssen händisch
                gepflegt werden. Schnittstellen zwischen Systemen fehlen oder funktionieren nicht
                richtig. Das Ergebnis? Verschwendete Zeit, frustrierte Mitarbeiter und verlorene
                Verkaufschancen.
              </p>
            </div>

            {/* Die Lösung */}
            <div className="mb-12 bg-solutions-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-solutions-primary mb-4">Die Lösung ist bereits verfügbar</h3>
              <p className="text-lg text-solutions-primary leading-relaxed mb-4">
                Linkty Solutions automatisiert, was automatisiert werden kann. Ob intelligentes
                Lead-Scraping (automatische Recherche potenzieller Kunden), Sonderprogrammierung
                für spezielle Anforderungen oder die Entwicklung von technischen Verbindungen
                zwischen Ihren bestehenden Systemen – wir bauen die technische Brücke, die Ihnen
                Zeit spart und Fehler reduziert. Die Dienstleistung ist live und wird bereits
                erfolgreich eingesetzt.
              </p>
              <p className="text-lg text-solutions-primary leading-relaxed">
                Ihre Vertriebsorganisation gewinnt Zeit für das, was wirklich zählt: Verkaufen.
                Während unsere Automatisierungen im Hintergrund laufen, konzentriert sich Ihr
                Team auf Abschlüsse statt auf Fleißarbeit. Besonders für PV-Solarteure und
                Vertriebsorganisationen bieten wir maßgeschneiderte Lösungen, die sich nahtlos
                in Ihre Prozesse integrieren.
              </p>
            </div>

            {/* Was wir automatisieren */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Was wir für Sie automatisieren</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Intelligentes Lead-Scraping & Datenaufbereitung',
                  'Technische Verbindungen zwischen Systemen',
                  'Sonderprogrammierung für individuelle Anforderungen',
                  'Prozessautomatisierung für Vertriebsorganisationen',
                  'Speziallösungen für PV-Solarteure',
                  'Manuelle Fleißarbeit wird digital erledigt'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-solutions-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hinweis */}
            <div className="bg-gray-50 border-l-4 border-solutions-accent p-6 rounded-r-lg mb-12">
              <p className="text-gray-700 leading-relaxed">
                Wir arbeiten gerade daran, diese Seite mit konkreten Use Cases, technischen
                Details und Beispielprojekten zu erweitern. Die Dienstleistung selbst ist aber
                bereits verfügbar. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
                – wir analysieren gemeinsam, wo Automatisierung bei Ihnen den größten Hebel erzielt.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 bg-solutions-primary text-white font-bold rounded-lg hover:bg-solutions-accent transition-all shadow-lg transform hover:-translate-y-1"
              >
                Analyse-Gespräch vereinbaren
              </button>
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 border-2 border-solutions-primary text-solutions-primary font-bold rounded-lg hover:bg-solutions-accent/10 transition-all"
              >
                Use Cases & Beispiele ansehen
              </button>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Oder direkt per E-Mail anfragen: <a href="mailto:solutions@linkty.de" className="text-solutions-accent hover:underline font-semibold">solutions@linkty.de</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Linkty Solutions ist Teil der Linkty Group – Ihr Partner für technische Automatisierung und Effizienzsteigerung.
            </p>
            <div className="flex gap-6 justify-center text-sm">
              <Link to="/" className="hover:text-solutions-accent transition-colors">Startseite</Link>
              <span className="text-gray-600">|</span>
              <a href="https://login.linkty.ai" target="_blank" rel="noopener noreferrer" className="hover:text-solutions-accent transition-colors">Portalzugang</a>
              <span className="text-gray-600">|</span>
              <Link to="/impressum" className="hover:text-solutions-accent transition-colors">Impressum</Link>
              <span className="text-gray-600">|</span>
              <Link to="/datenschutz" className="hover:text-solutions-accent transition-colors">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SolutionsPlaceholder;
