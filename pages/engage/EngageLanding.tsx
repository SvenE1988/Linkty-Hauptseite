import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';
import EngageHero from '../../components/engage/EngageHero';
import FlowDiagram from '../../components/engage/FlowDiagram';
import MobileAppSection from '../../components/engage/MobileAppSection';
import AutomationSection from '../../components/engage/AutomationSection';
import CRMSection from '../../components/engage/CRMSection';
import AudienceSplit from '../../components/engage/AudienceSplit';
import StatsSection from '../../components/engage/StatsSection';
import IntegrationsSection from '../../components/engage/IntegrationsSection';
import TestimonialsSection from '../../components/engage/TestimonialsSection';
import FinalCTA from '../../components/engage/FinalCTA';
import AnimatedThread from '../../components/engage/animated/AnimatedThread';

const EngageLanding: React.FC = () => {
  usePageTitle('Linkty | Engage - Mehr Umsatz durch System, nicht durch Zufall');

  return (
    <div className="relative">
      <AnimatedThread />
      <EngageHero />
      <FlowDiagram />
      <MobileAppSection />
      <AutomationSection />
      <CRMSection />
      <AudienceSplit />
      <StatsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default EngageLanding;
