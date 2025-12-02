import React, { useState, useEffect } from 'react';
import { Phone, Mic, MicOff } from 'lucide-react';

const VapiInlineAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vapi_inline_consent');
    if (consent === 'true') {
      setHasConsent(true);
    }
  }, []);

  const handleStartVoice = () => {
    if (!hasConsent) {
      setShowConsent(true);
      return;
    }
    setIsListening(true);
  };

  const handleConsent = () => {
    localStorage.setItem('vapi_inline_consent', 'true');
    setHasConsent(true);
    setShowConsent(false);
    setIsListening(true);
  };

  return (
    <>
      {showConsent && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowConsent(false)}>
          <div className="bg-white rounded-xl p-8 max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-voice-primary mb-4">Nutzungsbedingungen</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mit dem Klick auf „Zustimmen" und bei jeder Interaktion mit diesem KI-Agenten willige ich in die Aufzeichnung,
              Speicherung und Weitergabe meiner Kommunikation mit Drittanbietern sowie den Bestimmungen unserer
              Nutzungsbedingungen ein.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleConsent}
                className="flex-1 px-6 py-3 bg-voice-primary text-white font-semibold rounded-lg hover:bg-voice-accent transition-all"
              >
                Zustimmen
              </button>
              <button
                onClick={() => setShowConsent(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-voice-primary to-voice-accent text-white rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white/20 rounded-full p-6 mb-6">
            <Phone className="w-12 h-12" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testen Sie unseren Voice Agent live!
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Erleben Sie KI-gestützte Telefonie in Echtzeit. Klicken Sie auf den Button unten und starten Sie ein
            Gespräch mit unserem Voice Agent – kostenlos und unverbindlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {!isListening ? (
              <button
                onClick={handleStartVoice}
                className="group px-10 py-5 bg-white text-voice-primary font-bold text-lg rounded-xl hover:bg-voice-accent hover:text-white transition-all shadow-lg transform hover:-translate-y-1 flex items-center gap-3"
              >
                <Mic className="w-6 h-6" />
                Voice Agent starten
              </button>
            ) : (
              <button
                onClick={() => setIsListening(false)}
                className="group px-10 py-5 bg-red-500 text-white font-bold text-lg rounded-xl hover:bg-red-600 transition-all shadow-lg flex items-center gap-3 animate-pulse"
              >
                <MicOff className="w-6 h-6" />
                Gespräch beenden
              </button>
            )}
          </div>

          {isListening && (
            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm w-full max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Verbunden - Agent hört zu...</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-h-[100px]">
                <p className="text-sm text-white/80 italic">
                  Transkript wird hier angezeigt...
                </p>
              </div>
            </div>
          )}

          <p className="text-sm text-white/70 mt-6">
            Keine Installation erforderlich • Funktioniert direkt im Browser
          </p>
        </div>
      </div>
    </>
  );
};

export default VapiInlineAssistant;
