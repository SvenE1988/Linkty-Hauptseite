import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-primary to-engage-secondary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Teamwork, der Ergebnisse liefert
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Aufgaben delegieren, Verantwortlichkeiten verfolgen, Erfolge messen. Ihr Team
              arbeitet synchron und effizient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-engage-primary mb-6">
                Aufgaben & Delegation
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-teal rounded-full mt-2 flex-shrink-0" />
                  <span>Automatische Aufgabenzuweisung basierend auf Verfügbarkeit</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-teal rounded-full mt-2 flex-shrink-0" />
                  <span>Priorisierung und Fälligkeitsdaten</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-teal rounded-full mt-2 flex-shrink-0" />
                  <span>Echtzeitbenachrichtigungen für Ihr Team</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-engage-primary mb-6">
                Berechtigungen & Rollen
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Granulare Zugriffsrechte für verschiedene Teamrollen</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Sichere Datenverwaltung nach DSGVO</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-engage-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Aktivitätsprotokolle für vollständige Transparenz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Team-Kollaboration optimieren</h3>
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

export default TeamPage;
