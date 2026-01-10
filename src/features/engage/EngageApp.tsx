import { Routes, Route } from 'react-router-dom';
import { EngageLayout } from '@/features/engage/EngageLayout';
import { EngageLanding } from '@/features/engage/pages/EngageLanding';
import { CRMPage } from '@/features/engage/pages/CRMPage';
import { KommunikationPage } from '@/features/engage/pages/KommunikationPage';
import { MarketingPage } from '@/features/engage/pages/MarketingPage';
import { TeamPage } from '@/features/engage/pages/TeamPage';
import { VoicePage } from '@/features/engage/pages/VoicePage';
import { WorkflowsPage } from '@/features/engage/pages/WorkflowsPage';
import { RessourcenPage } from '@/features/engage/pages/RessourcenPage';
import { EngageImpressumPage } from '@/features/engage/pages/ImpressumPage';
import { EngageDatenschutzPage } from '@/features/engage/pages/DatenschutzPage';

export const EngageApp = () => {
  return (
    <EngageLayout>
      <Routes>
        <Route index element={<EngageLanding />} />
        <Route path="crm" element={<CRMPage />} />
        <Route path="kommunikation" element={<KommunikationPage />} />
        <Route path="marketing" element={<MarketingPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="voice" element={<VoicePage />} />
        <Route path="workflows" element={<WorkflowsPage />} />
        <Route path="ressourcen" element={<RessourcenPage />} />
        <Route path="impressum" element={<EngageImpressumPage />} />
        <Route path="datenschutz" element={<EngageDatenschutzPage />} />
      </Routes>
    </EngageLayout>
  );
};
