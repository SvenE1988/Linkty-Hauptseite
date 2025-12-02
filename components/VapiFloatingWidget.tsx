import React from 'react';
import { VapiWidget } from '@vapi-ai/client-sdk-react';

interface VapiFloatingWidgetProps {
  accentColor: string;
  pageName: string;
}

const VapiFloatingWidget: React.FC<VapiFloatingWidgetProps> = ({ accentColor, pageName }) => {
  return (
    <VapiWidget
      publicKey="9fab04f9-6085-4f4c-85c8-17f0505e27c4"
      assistantId="f0d545cf-1d88-45e0-a39b-d4f286650afe"
      mode="voice"
      theme="light"
      baseBgColor="#ffffff"
      accentColor={accentColor}
      ctaButtonColor="#ffffff"
      ctaButtonTextColor="#000000"
      borderRadius="large"
      size="full"
      position="bottom-right"
      title={`Linkty ${pageName} - Live Assistent`}
      startButtonText="Start"
      endButtonText="Beenden"
      chatFirstMessage="Hallo! Wie kann ich Ihnen heute helfen?"
      chatPlaceholder="Schreiben Sie Ihre Nachricht..."
      voiceShowTranscript={true}
      consentRequired={true}
      consentTitle="Nutzungsbedingungen"
      consentContent="Mit dem Klick auf &quot;Zustimmen&quot; und bei jeder Interaktion mit diesem KI-Agenten willige ich in die Aufzeichnung, Speicherung und Weitergabe meiner Kommunikation mit Drittanbietern sowie den Bestimmungen unserer Nutzungsbedingungen ein."
      consentStorageKey="vapi_widget_consent"
    />
  );
};

export default VapiFloatingWidget;
