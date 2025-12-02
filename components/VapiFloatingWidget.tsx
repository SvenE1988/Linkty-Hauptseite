import React from 'react';
import { VapiWidget } from '@vapi-ai/client-sdk-react';
import { getFloatingWidgetConfig } from '../config/vapi.config';

interface VapiFloatingWidgetProps {
  pageName: string;
}

const VapiFloatingWidget: React.FC<VapiFloatingWidgetProps> = ({ pageName }) => {
  const config = getFloatingWidgetConfig(pageName);

  return (
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
      position={config.position}
      title={config.title}
      startButtonText={config.startButtonText}
      endButtonText={config.endButtonText}
      chatFirstMessage={config.chatFirstMessage}
      chatPlaceholder={config.chatPlaceholder}
      voiceShowTranscript={config.voiceShowTranscript}
      consentRequired={config.consentRequired}
      consentTitle={config.consentTitle}
      consentContent={config.consentContent}
      consentStorageKey={config.consentStorageKey}
    />
  );
};

export default VapiFloatingWidget;
