import React from 'react';
import EngageHero from '../../components/engage/EngageHero';
import CoreFeatures from '../../components/engage/CoreFeatures';
import ValueProposition from '../../components/engage/ValueProposition';
import StatsSection from '../../components/engage/StatsSection';
import IntegrationsSection from '../../components/engage/IntegrationsSection';
import TestimonialsSection from '../../components/engage/TestimonialsSection';
import FinalCTA from '../../components/engage/FinalCTA';

const EngageLanding: React.FC = () => {
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

export default EngageLanding;
