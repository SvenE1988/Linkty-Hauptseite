import React from 'react';
import { BeyondPresenceAgent } from './BeyondPresenceAgent';

export const TestChatPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Beyond Presence Agent Test
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Direkte LiveKit-Integration mit automatischem Video-Fokus.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-2 overflow-hidden border border-gray-100">
          <BeyondPresenceAgent />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Wie es funktioniert</h3>
            <p className="text-blue-700 text-sm">
              Diese Seite verbindet sich direkt mit der LiveKit Cloud. Der Agent ist ein Teilnehmer im Raum, dessen Video-Stream von Beyond Presence gerendert wird.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Interaktion</h3>
            <p className="text-green-700 text-sm">
              Sobald die Verbindung steht, kannst du mit dem Agenten sprechen. Stelle sicher, dass Mikrofon und Kamera freigegeben sind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
