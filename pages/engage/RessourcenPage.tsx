import React, { useState } from 'react';
import { FileText, BookOpen, Video } from 'lucide-react';

const RessourcenPage: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-primary to-engage-secondary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Ressourcen</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Hilfreiche Ressourcen, Whitepapers und Guides für Ihren Vertriebserfolg.
            </p>
          </div>
        </div>
      </section>

      {showNotification && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowNotification(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-engage-primary mb-4">
              Information
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
              {notificationMessage}
            </p>
            <button
              onClick={() => setShowNotification(false)}
              className="w-full px-6 py-3 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all"
            >
              Verstanden
            </button>
          </div>
        </div>
      )}

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-engage-surface p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <FileText className="w-12 h-12 text-engage-teal mb-4" />
              <h3 className="text-xl font-bold text-engage-primary mb-3">Whitepapers</h3>
              <p className="text-gray-600 mb-4">
                Detaillierte Guides zu CRM-Strategien und Vertriebsautomatisierung.
              </p>
              <button
                onClick={() => {
                  setNotificationMessage('Detaillierte Guides zu CRM-Strategien und Vertriebsautomatisierung. Durchsuchen →\n\nDiese Informationen werden gerade verarbeitet und sind bald auf der Homepage verfügbar.');
                  setShowNotification(true);
                }}
                className="text-engage-secondary font-semibold hover:text-engage-primary cursor-pointer"
              >
                Durchsuchen →
              </button>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <BookOpen className="w-12 h-12 text-engage-secondary mb-4" />
              <h3 className="text-xl font-bold text-engage-primary mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Erfolgsgeschichten von Maklern und Finanzberatern.
              </p>
              <button
                onClick={() => {
                  setNotificationMessage('Erfolgsgeschichten von Maklern und Finanzberatern. Lesen →\n\nDiese Informationen werden gerade verarbeitet und sind bald auf der Homepage verfügbar.');
                  setShowNotification(true);
                }}
                className="text-engage-secondary font-semibold hover:text-engage-primary cursor-pointer"
              >
                Lesen →
              </button>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Video className="w-12 h-12 text-engage-accent mb-4" />
              <h3 className="text-xl font-bold text-engage-primary mb-3">Video-Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Schritt-für-Schritt Anleitungen für optimale Nutzung.
              </p>
              <button
                onClick={() => {
                  setNotificationMessage('Schritt-für-Schritt Anleitungen für optimale Nutzung. Ansehen →\n\nDiese Informationen werden gerade verarbeitet und sind bald auf der Homepage verfügbar.');
                  setShowNotification(true);
                }}
                className="text-engage-secondary font-semibold hover:text-engage-primary cursor-pointer"
              >
                Ansehen →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RessourcenPage;
