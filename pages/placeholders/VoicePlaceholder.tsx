import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import VapiLazyWrapper from '../../components/vapi/VapiLazyWrapper';
import CalendarModal from '../../components/shared/CalendarModal';
import PlaceholderHeader from '../../components/shared/PlaceholderHeader';
import SimpleLegalFooter from '../../components/shared/SimpleLegalFooter';

const VoicePlaceholder: React.FC = () => {
  usePageTitle('Linkty Voice | KI-Telefonie für 100% Erreichbarkeit');
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VapiLazyWrapper pageName="Voice" />
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        iframeId="EAqjBUlT5vgXjUg1UxFG_voice"
      />

      <main className="min-h-screen bg-gradient-to-b from-voice-accent/10 to-white" role="main">
        <PlaceholderHeader
          logoSrc="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a88bf1f60a17cede8d00c.png"
          logoAlt="Linkty Voice Logo - KI-gestützte Telefonie"
          onDemoClick={() => setShowCalendar(true)}
          primaryColor="voice-primary"
        />

        {/* Hero */}
        <section className="pt-32 pb-12 px-4 relative min-h-[70vh] flex items-center">
          {/* Hintergrundbild */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=60&w=1200&auto=format&fit=crop&dpr=2"
              alt="Kommunikations-Wellenform und Audio-Visualisierung für KI-Telefonie"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-voice-accent/30 text-white border border-white/30 rounded-full text-sm font-semibold mb-8">
              <CheckCircle2 className="w-5 h-5" />
              Diese Dienstleistung ist bereits verfügbar
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Linkty Voice ist einsatzbereit – die Detailseite folgt in Kürze
            </h1>

            <p className="text-2xl md:text-3xl text-white font-bold mb-6 drop-shadow-lg">
              Gehen Sie ran, auch wenn Sie nicht da sind.
            </p>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              KI-gestützte Telefonie für 100% Erreichbarkeit – ohne Personalengpass.
            </p>
          </div>
        </section>

        {/* Kombinierte Kachel: Einsatzbereit + Live-Test */}
        <section className="pb-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-voice-primary to-voice-accent text-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Diese Dienstleistung ist schon heute für Sie einsatzbereit
                </h2>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-white" />
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Live-Test verfügbar!
                  </p>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  Klicken Sie auf den <span className="font-bold text-white">türkisen Button rechts unten</span> auf der Seite, um ein echtes Gespräch mit unserem Voice-Agenten zu starten und die Technologie selbst zu erleben.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">

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

        <SimpleLegalFooter variant="dark" accentColor="voice-accent" />
      </main>
    </>
  );
};

export default VoicePlaceholder;
