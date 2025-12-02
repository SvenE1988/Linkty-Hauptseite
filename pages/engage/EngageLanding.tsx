import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';
import EngageHero from '../../components/engage/EngageHero';
import FlowDiagram from '../../components/engage/FlowDiagram';
import AudienceSplit from '../../components/engage/AudienceSplit';
import MobileAppSection from '../../components/engage/MobileAppSection';
import AutomationSection from '../../components/engage/AutomationSection';
import CRMSection from '../../components/engage/CRMSection';
import StatsSection from '../../components/engage/StatsSection';
import IntegrationsSection from '../../components/engage/IntegrationsSection';
import TestimonialsSection from '../../components/engage/TestimonialsSection';
import FinalCTA from '../../components/engage/FinalCTA';

const EngageLanding: React.FC = () => {
  usePageTitle('Linkty | Engage - Mehr Umsatz durch System, nicht durch Zufall');

  return (
    <div className="relative">
      <EngageHero />
      <FlowDiagram />
      <AudienceSplit />
      <MobileAppSection />
      <AutomationSection />
      <CRMSection />
      <StatsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default EngageLanding;
