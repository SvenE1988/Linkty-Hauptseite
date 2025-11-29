import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const VoicePlaceholder: React.FC = () => {
  usePageTitle('Linkty Voice | KI-Telefonie für 100% Erreichbarkeit');
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
                src="https://link.saleshub360.de/widget/booking/EAqjBUlT5vgXjUg1UxFG"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="EAqjBUlT5vgXjUg1UxFG_voice"
              />
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-voice-accent/10 to-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a88bf1f60a17cede8d00c.png"
                alt="Linkty Voice"
                className="h-10"
              />
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://login.linkty.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-voice-accent transition-colors"
              >
                Portalzugang
              </a>
              <Link
                to="/"
                className="text-sm font-semibold text-gray-600 hover:text-voice-accent transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-voice-accent/20 text-voice-primary rounded-full text-sm font-semibold mb-8">
              <CheckCircle2 className="w-5 h-5" />
              Diese Dienstleistung ist bereits verfügbar
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Linkty Voice ist einsatzbereit – die Detailseite folgt in Kürze
            </h1>

            <p className="text-2xl md:text-3xl text-voice-primary font-bold mb-6">
              Gehen Sie ran, auch wenn Sie nicht da sind.
            </p>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KI-gestützte Telefonie für 100% Erreichbarkeit – ohne Personalengpass.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-voice-primary to-voice-accent text-white rounded-2xl p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Diese Dienstleistung ist schon heute für Sie einsatzbereit
                </h2>
              </div>
            </div>

            {/* Das Problem */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Das Problem kennen Sie</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ihre Telefonanlage klingelt. Aber niemand ist da, um abzunehmen. Das Ergebnis?
                Verpasste Anfragen, frustrierte Kunden und verlorene Umsätze. Besonders für
                Hausverwaltungen, Agenturen und Praxen wird das Telefon schnell zum Stressfaktor
                statt zur Chance.
              </p>
            </div>

            {/* Die Lösung */}
            <div className="mb-12 bg-voice-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-voice-primary mb-4">Die Lösung ist bereits verfügbar</h3>
              <p className="text-lg text-voice-primary leading-relaxed mb-4">
                Linkty Voice ist Ihr digitaler Empfang, der niemals schläft. Unsere KI-Sprachbots
                nehmen Anrufe 24/7 entgegen, qualifizieren Anfragen und leiten sie automatisch
                an die richtige Stelle weiter. Die Technologie ist einsatzbereit – Sie können
                sofort starten.
              </p>
              <p className="text-lg text-voice-primary leading-relaxed">
                Mit Linkty Voice erreichen Sie 100% Erreichbarkeit, ohne zusätzliches Personal
                einstellen zu müssen. Die Bots lernen Ihre Prozesse, integrieren sich nahtlos
                in Ihre bestehende Telefonanlage und sorgen dafür, dass keine wichtige Anfrage
                mehr untergeht. Ob Terminvereinbarung, Vorqualifizierung oder einfache Weiterleitung
                – Linkty Voice übernimmt die Arbeit, während Ihr Team sich auf das Wesentliche
                konzentriert.
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Was Linkty Voice für Sie leistet</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '24/7 Anrufannahme ohne Personalkosten',
                  'Nahtlose Integration in Ihre bestehende Telefonanlage',
                  'Intelligente Anrufqualifizierung und Routing',
                  'DSGVO-konform und datenschutzsicher',
                  'Individuelle Anpassung an Ihre Prozesse',
                  'Keine wichtige Anfrage geht mehr verloren'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-voice-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hinweis */}
            <div className="bg-gray-50 border-l-4 border-voice-accent p-6 rounded-r-lg mb-12">
              <p className="text-gray-700 leading-relaxed">
                Diese Seite wird gerade inhaltlich überarbeitet und mit weiteren Details angereichert.
                Die Dienstleistung selbst steht Ihnen aber bereits vollumfänglich zur Verfügung.
                Sprechen Sie uns einfach an – wir zeigen Ihnen in einem unverbindlichen Gespräch,
                wie Linkty Voice Ihre Erreichbarkeit transformiert.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 bg-voice-primary text-white font-bold rounded-lg hover:bg-voice-accent transition-all shadow-lg transform hover:-translate-y-1"
              >
                Jetzt unverbindliches Gespräch vereinbaren
              </button>
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 border-2 border-voice-primary text-voice-primary font-bold rounded-lg hover:bg-voice-accent/10 transition-all"
              >
                Live-Demo anfragen
              </button>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Oder direkt per E-Mail: <a href="mailto:voice@linkty.ai" className="text-voice-accent hover:underline font-semibold">voice@linkty.ai</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Linkty Voice ist Teil der Linkty Group – Ihr Partner für digitale Automatisierung und Wachstum.
            </p>
            <div className="flex gap-6 justify-center text-sm">
              <Link to="/" className="hover:text-voice-accent transition-colors">Startseite</Link>
              <span className="text-gray-600">|</span>
              <a href="https://login.linkty.ai" target="_blank" rel="noopener noreferrer" className="hover:text-voice-accent transition-colors">Portalzugang</a>
              <span className="text-gray-600">|</span>
              <Link to="/impressum" className="hover:text-voice-accent transition-colors">Impressum</Link>
              <span className="text-gray-600">|</span>
              <Link to="/datenschutz" className="hover:text-voice-accent transition-colors">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VoicePlaceholder;
