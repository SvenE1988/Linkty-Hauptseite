import React from 'react';

interface VapiFloatingWidgetProps {
  accentColor: string;
  pageName: string;
}

const VapiFloatingWidget: React.FC<VapiFloatingWidgetProps> = ({ accentColor, pageName }) => {
  return (
    <vapi-widget
      public-key="9fab04f9-6085-4f4c-85c8-17f0505e27c4"
      assistant-id="f0d545cf-1d88-45e0-a39b-d4f286650afe"
      mode="voice"
      theme="light"
      base-bg-color="#ffffff"
      accent-color={accentColor}
      cta-button-color="#ffffff"
      cta-button-text-color="#000000"
      border-radius="large"
      size="full"
      position="bottom-right"
      title={`Linkty ${pageName} - Live Assistent`}
      start-button-text="Start"
      end-button-text="Beenden"
      chat-first-message="Hallo! Wie kann ich Ihnen heute helfen?"
      chat-placeholder="Schreiben Sie Ihre Nachricht..."
      voice-show-transcript="true"
      consent-required="true"
      consent-title="Nutzungsbedingungen"
      consent-content="Mit dem Klick auf &quot;Zustimmen&quot; und bei jeder Interaktion mit diesem KI-Agenten willige ich in die Aufzeichnung, Speicherung und Weitergabe meiner Kommunikation mit Drittanbietern sowie den Bestimmungen unserer Nutzungsbedingungen ein."
      consent-storage-key="vapi_widget_consent"
    />
  );
};

export default VapiFloatingWidget;
