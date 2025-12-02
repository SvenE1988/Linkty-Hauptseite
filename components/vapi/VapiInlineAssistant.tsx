import React from 'react';
import { VapiWidget } from '@vapi-ai/client-sdk-react';
import { Phone } from 'lucide-react';
import { getInlineWidgetConfig } from '../../config/vapi.config';

const VapiInlineAssistant: React.FC = () => {
  const config = getInlineWidgetConfig();

  return (
    <div className="bg-gradient-to-br from-voice-primary to-voice-accent text-white rounded-2xl p-8 md:p-12 shadow-2xl">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-white/20 rounded-full p-6 mb-6">
          <Phone className="w-12 h-12" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {config.title}
        </h2>

        <p className="text-xl text-white/90 mb-6 max-w-2xl">
          Erleben Sie KI-gestützte Telefonie in Echtzeit. Klicken Sie auf den türkisen Voice-Button rechts unten
          auf der Seite und starten Sie ein Gespräch mit unserem Voice Agent – kostenlos und unverbindlich.
        </p>
      </div>

      <div className="vapi-inline-container">
        <VapiWidget
          publicKey={config.publicKey}
          assistantId={config.assistantId}
          mode={config.mode}
          theme={config.theme}
          baseBgColor={config.baseBgColor}
          accentColor={config.accentColor}
          ctaButtonColor={config.ctaButtonColor}
          ctaButtonTextColor={config.ctaButtonTextColor}
          borderRadius={config.borderRadius}
          size={config.size}
          startButtonText={config.startButtonText}
          endButtonText={config.endButtonText}
          chatFirstMessage={config.chatFirstMessage}
          chatPlaceholder={config.chatPlaceholder}
          voiceShowTranscript={config.voiceShowTranscript}
          consentRequired={config.consentRequired}
          consentTitle={config.consentTitle}
          consentContent={config.consentContent}
          consentStorageKey="vapi_inline_consent"
        />
      </div>

      <p className="text-sm text-white/70 mt-6 text-center">
        Keine Installation erforderlich • Funktioniert direkt im Browser
      </p>
    </div>
  );
};

export default VapiInlineAssistant;
