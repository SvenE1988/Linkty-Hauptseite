import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { EngageHero } from '@/features/engage/components/EngageHero';
import { CoreFeatures } from '@/features/engage/components/CoreFeatures';
import { ValueProposition } from '@/features/engage/components/ValueProposition';
import { StatsSection } from '@/features/engage/components/StatsSection';
import { IntegrationsSection } from '@/features/engage/components/IntegrationsSection';
import { TestimonialsSection } from '@/features/engage/components/TestimonialsSection';
import { FinalCTA } from '@/features/engage/components/FinalCTA';

export const EngageLanding = () => {
  usePageTitle('Linkty | Engage - CRM für Versicherungsmakler & Finanzdienstleister');

  return (
    <div>
      <EngageHero />
      <CoreFeatures />
      <ValueProposition />
      <StatsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};
