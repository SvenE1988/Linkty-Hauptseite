import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Palette, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import VapiLazyWrapper from '../../components/vapi/VapiLazyWrapper';
import CalendarModal from '../../components/shared/CalendarModal';
import PlaceholderHeader from '../../components/shared/PlaceholderHeader';
import SimpleLegalFooter from '../../components/shared/SimpleLegalFooter';

const StudioPlaceholder: React.FC = () => {
  usePageTitle('Linkty Studio | Full-Service Digital Marketing');
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VapiLazyWrapper pageName="Studio" />
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        iframeId="EAqjBUlT5vgXjUg1UxFG_studio"
      />

      <main className="min-h-screen bg-gradient-to-b from-studio-accent/10 to-white" role="main">
        <PlaceholderHeader
          logoSrc="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a88bf313bfdca12ec1cd2.png"
          logoAlt="Linkty Studio Logo - Full-Service Digital Marketing"
          onDemoClick={() => setShowCalendar(true)}
          primaryColor="studio-primary"
        />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 relative min-h-[70vh] flex items-center">
          {/* Hintergrundbild */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=60&w=1200&auto=format&fit=crop&dpr=2"
              alt="Modernes Webdesign und Website-Struktur mit UI/UX Elementen"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-studio-accent/30 text-white border border-white/30 rounded-full text-sm font-semibold mb-8">
              <CheckCircle2 className="w-5 h-5" />
              Unser komplettes Leistungsspektrum steht zur Verfügung
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Linkty Studio ist bereits für Sie da – die Webseite wird gerade überarbeitet
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-6 drop-shadow-lg">
              Ihr kompletter Außenauftritt: Von der Webseite bis zum täglichen Post.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Full-Service-Agentur für digitale Sichtbarkeit und Kundengewinnung.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-studio-primary to-studio-accent text-white rounded-2xl p-6 sm:p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Unser komplettes Leistungsspektrum steht Ihnen heute schon zur Verfügung
                </h2>
              </div>
            </div>

            {/* Das Problem */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Das Problem kennen Sie</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ihre Webseite ist veraltet. Ihr Social Media liegt brach. Ihr Außenauftritt
                entspricht nicht dem Niveau Ihrer Dienstleistung. Und Sie haben weder Zeit noch
                Team, um das zu ändern. Kunden vergleichen online – und wenn Sie nicht überzeugen,
                gewinnt die Konkurrenz.
              </p>
            </div>

            {/* Die Lösung */}
            <div className="mb-12 bg-studio-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-studio-primary mb-4">Die Lösung ist bereits verfügbar</h3>
              <p className="text-lg text-studio-primary leading-relaxed mb-4">
                Linkty Studio ist Ihre ausgelagerte Marketingabteilung. Wir übernehmen alles:
                Von der modernen, conversion-optimierten Webseite über professionelle Content
                Creation (Foto & Video) bis hin zum täglichen Social Media Management. Auch
                Reputationsmanagement gehört dazu – wir überwachen und optimieren Ihre Online-
                Bewertungen. Die Services sind live und einsatzbereit.
              </p>
              <p className="text-lg text-studio-primary leading-relaxed">
                Sie erhalten einen digitalen Außenauftritt, der Vertrauen schafft und Kunden
                anzieht – ohne dass Sie sich selbst darum kümmern müssen. Ob Makler, KMU oder
                Dienstleister: Wir kennen Ihre Branche und wissen, was funktioniert. Von der
                technischen Basis (Webseite) bis zur täglichen Präsenz (Content & Stories) –
                alles aus einer Hand.
              </p>
            </div>

            {/* Leistungsübersicht */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Was Linkty Studio für Sie leistet</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Moderne, conversion-optimierte Webseiten',
                  'Professionelle Foto- & Videoproduktion',
                  'Komplettes Social Media Management',
                  'Content-Erstellung und Posting',
                  'Reputationsmanagement (Bewertungen)',
                  'Auf Ihre Branche zugeschnitten'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-studio-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hinweis */}
            <div className="bg-gray-50 border-l-4 border-studio-accent p-6 rounded-r-lg mb-12">
              <p className="text-gray-700 leading-relaxed">
                Wir arbeiten gerade daran, diese Seite mit Portfolio-Beispielen, Case Studies und
                weiteren Details zu erweitern. Das ändert aber nichts daran, dass Sie schon jetzt
                mit uns starten können. Vereinbaren Sie einen Termin und lassen Sie uns gemeinsam
                Ihren digitalen Auftritt auf das nächste Level heben.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalendar(true)}
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 min-h-[48px] bg-studio-primary text-white font-bold rounded-lg hover:bg-studio-accent transition-all shadow-lg transform hover:-translate-y-1"
              >
                Kostenlose Erstberatung buchen
              </button>
              <button
                onClick={() => setShowCalendar(true)}
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 min-h-[48px] border-2 border-studio-primary text-studio-primary font-bold rounded-lg hover:bg-studio-accent/10 transition-all"
              >
                Referenzen & Portfolio ansehen
              </button>
            </div>

            <p className="text-center text-gray-600 mt-8">
              Oder direkt anfragen: <a href="mailto:studio@linkty.de" className="text-studio-accent hover:underline font-semibold">studio@linkty.de</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <SimpleLegalFooter variant="dark" accentColor="studio-accent" />
      </main>
    </>
  );
};

export default StudioPlaceholder;
