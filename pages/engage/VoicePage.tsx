import React from 'react';
import { Phone, Clock, MessageSquare, Zap } from 'lucide-react';

const VoicePage: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-teal to-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Linkty Voice
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Intelligente KI-Telefonie, die Anrufe 24/7 entgegennimmt, qualifiziert und
              weiterleitet. Ihr digitaler Empfang, der niemals schläft.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-engage-primary mb-12 text-center">
            Wie Linkty Voice funktioniert
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-engage-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-engage-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Anruf eingehend</h3>
              <p className="text-gray-600">KI nimmt sofort ab, auch außerhalb der Geschäftszeiten</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-engage-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-engage-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Anliegen erfassen</h3>
              <p className="text-gray-600">Natürliche Konversation, Grund des Anrufs verstehen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-engage-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-engage-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualifizierung</h3>
              <p className="text-gray-600">Lead-Scoring und Priorisierung in Echtzeit</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-engage-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-engage-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weiterleitung</h3>
              <p className="text-gray-600">Direkt zum Team oder Termin vereinbaren</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-engage-primary mb-8">Integration mit Engage</h2>
          <p className="text-lg text-gray-700 mb-6">
            Linkty Voice ist nahtlos in Linkty Engage integriert. Jeder Anruf wird automatisch im
            CRM protokolliert, Follow-ups werden erstellt und Ihr Team hat sofort Zugriff auf alle
            relevanten Informationen.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
              <span>Automatische Anrufprotokolle im Kundenprofil</span>
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
              <span>Follow-up-Aufgaben basierend auf Anrufinhalt</span>
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 bg-engage-teal rounded-full mt-2" />
              <span>Transkription und Sentiment-Analyse</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">100% Erreichbarkeit erreichen</h3>
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

export default VoicePage;
