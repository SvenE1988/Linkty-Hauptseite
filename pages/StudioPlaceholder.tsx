import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import VapiFloatingWidget from '../components/VapiFloatingWidget';

const StudioPlaceholder: React.FC = () => {
  usePageTitle('Linkty Studio | Full-Service Digital Marketing');
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <VapiFloatingWidget pageName="Studio" />
      {showCalendar && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setShowCalendar(false)}>
          <div className="bg-white rounded-lg w-full max-w-5xl max-h-[95vh] overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Kalender schließen"
            >
              ×
            </button>
            <div className="p-4 sm:p-6">
              <iframe
                src="https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', height: '85vh' }}
                scrolling="no"
                id="EAqjBUlT5vgXjUg1UxFG_studio"
                title="Linkty Studio Demo Terminbuchung"
              />
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-gradient-to-b from-studio-accent/10 to-white" role="main">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" aria-label="Zurück zur Startseite">
              <img
                src="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a88bf313bfdca12ec1cd2.png"
                alt="Linkty Studio Logo - Full-Service Digital Marketing"
                className="h-10"
                loading="eager"
              />
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://login.linkty.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Portalzugang
              </a>
              <button
                onClick={() => setShowCalendar(true)}
                className="px-6 py-2 bg-studio-primary text-white font-semibold rounded-lg hover:bg-studio-accent transition-all shadow-md hover:shadow-lg"
              >
                Demo buchen
              </button>
              <Link
                to="/"
                className="text-sm font-semibold text-gray-600 hover:text-studio-accent transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/98 z-0"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-studio-accent/20 text-studio-primary rounded-full text-sm font-semibold mb-8">
              <CheckCircle2 className="w-5 h-5" />
              Unser komplettes Leistungsspektrum steht zur Verfügung
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Linkty Studio ist bereits für Sie da – die Webseite wird gerade überarbeitet
            </h1>

            <p className="text-2xl md:text-3xl text-gray-800 font-bold mb-6 drop-shadow-sm">
              Ihr kompletter Außenauftritt: Von der Webseite bis zum täglichen Post.
            </p>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-Service-Agentur für digitale Sichtbarkeit und Kundengewinnung.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-studio-primary to-studio-accent text-white rounded-2xl p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
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
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Moderne, conversion-optimierte Webseiten',
                  'Professionelle Foto- & Videoproduktion',
                  'Komplettes Social Media Management',
                  'Content-Erstellung und Posting',
                  'Reputationsmanagement (Bewertungen)',
                  'Auf Ihre Branche zugeschnitten'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-studio-accent flex-shrink-0 mt-1" />
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
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 bg-studio-primary text-white font-bold rounded-lg hover:bg-studio-accent transition-all shadow-lg transform hover:-translate-y-1"
              >
                Kostenlose Erstberatung buchen
              </button>
              <button
                onClick={() => setShowCalendar(true)}
                className="px-10 py-4 border-2 border-studio-primary text-studio-primary font-bold rounded-lg hover:bg-studio-accent/10 transition-all"
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
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Linkty Studio ist Teil der Linkty Group – Ihre Full-Service-Agentur für digitale Sichtbarkeit.
            </p>
            <div className="flex gap-6 justify-center text-sm">
              <Link to="/" className="hover:text-studio-accent transition-colors">Startseite</Link>
              <span className="text-gray-600">|</span>
              <a href="https://login.linkty.ai" target="_blank" rel="noopener noreferrer" className="hover:text-studio-accent transition-colors">Portalzugang</a>
              <span className="text-gray-600">|</span>
              <Link to="/impressum" className="hover:text-studio-accent transition-colors">Impressum</Link>
              <span className="text-gray-600">|</span>
              <Link to="/datenschutz" className="hover:text-studio-accent transition-colors">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default StudioPlaceholder;
