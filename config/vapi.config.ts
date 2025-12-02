export interface VapiCredentials {
  publicKey: string;
  assistantId: string;
}

export interface VapiBaseConfig {
  mode: 'voice' | 'chat';
  theme: 'light' | 'dark';
  baseBgColor: string;
  ctaButtonColor: string;
  ctaButtonTextColor: string;
  borderRadius: 'small' | 'medium' | 'large';
  startButtonText: string;
  endButtonText: string;
  chatFirstMessage: string;
  chatPlaceholder: string;
  voiceShowTranscript: boolean;
}

export interface VapiConsentConfig {
  consentRequired: boolean;
  consentTitle: string;
  consentContent: string;
  consentStorageKey: string;
}

export interface VapiPageConfig {
  accentColor: string;
  title: string;
  displayMode?: 'inline' | 'floating';
}

export interface VapiFullConfig extends VapiCredentials, VapiBaseConfig, VapiConsentConfig {
  accentColor?: string;
  title?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'small' | 'medium' | 'large' | 'full';
}

export const VAPI_CREDENTIALS: VapiCredentials = {
  publicKey: '9fab04f9-6085-4f4c-85c8-17f0505e27c4',
  assistantId: 'f0d545cf-1d88-45e0-a39b-d4f286650afe',
};

export const VAPI_BASE_CONFIG: VapiBaseConfig = {
  mode: 'voice',
  theme: 'light',
  baseBgColor: '#ffffff',
  ctaButtonColor: '#ffffff',
  ctaButtonTextColor: '#000000',
  borderRadius: 'large',
  startButtonText: 'Start',
  endButtonText: 'Beenden',
  chatFirstMessage: 'Hallo! Wie kann ich Ihnen heute helfen?',
  chatPlaceholder: 'Schreiben Sie Ihre Nachricht...',
  voiceShowTranscript: true,
};

export const VAPI_CONSENT_CONFIG: VapiConsentConfig = {
  consentRequired: true,
  consentTitle: 'Nutzungsbedingungen',
  consentContent: 'Mit dem Klick auf "Zustimmen" und bei jeder Interaktion mit diesem KI-Agenten willige ich in die Aufzeichnung, Speicherung und Weitergabe meiner Kommunikation mit Drittanbietern sowie den Bestimmungen unserer Nutzungsbedingungen ein.',
  consentStorageKey: 'vapi_widget_consent',
};

export const VAPI_PAGE_CONFIGS: Record<string, VapiPageConfig> = {
  studio: {
    accentColor: '#4a7c8a',
    title: 'Linkty Studio - Live Assistent',
    displayMode: 'floating',
  },
  solutions: {
    accentColor: '#0E5C7A',
    title: 'Linkty Solutions - Live Assistent',
    displayMode: 'floating',
  },
  engage: {
    accentColor: '#00a8a8',
    title: 'Linkty Engage - Live Assistent',
    displayMode: 'floating',
  },
  voice: {
    accentColor: '#0E5C7A',
    title: 'Testen Sie unseren Voice Agent live!',
    displayMode: 'inline',
  },
};

export const getVapiConfig = (page: string): VapiFullConfig => {
  const pageConfig = VAPI_PAGE_CONFIGS[page.toLowerCase()];

  return {
    ...VAPI_CREDENTIALS,
    ...VAPI_BASE_CONFIG,
    ...VAPI_CONSENT_CONFIG,
    ...(pageConfig && {
      accentColor: pageConfig.accentColor,
      title: pageConfig.title,
    }),
  };
};

export const getFloatingWidgetConfig = (pageName: string) => {
  return {
    ...getVapiConfig(pageName.toLowerCase()),
    position: 'bottom-right' as const,
    size: 'full' as const,
  };
};

export const getInlineWidgetConfig = () => {
  return {
    ...getVapiConfig('voice'),
    size: 'full' as const,
  };
};
