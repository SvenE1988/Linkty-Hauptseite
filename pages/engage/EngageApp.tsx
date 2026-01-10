import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import EngageLayout from '../../components/engage/EngageLayout';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const EngageLanding = lazy(() => import('./EngageLanding'));
const CRMPage = lazy(() => import('./CRMPage'));
const KommunikationPage = lazy(() => import('./KommunikationPage'));
const MarketingPage = lazy(() => import('./MarketingPage'));
const TeamPage = lazy(() => import('./TeamPage'));
const VoicePage = lazy(() => import('./VoicePage'));
const WorkflowsPage = lazy(() => import('./WorkflowsPage'));
const RessourcenPage = lazy(() => import('./RessourcenPage'));
const ImpressumPage = lazy(() => import('./ImpressumPage'));
const DatenschutzPage = lazy(() => import('./DatenschutzPage'));

const EngageApp: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner variant="white" />}>
      <Routes>
        <Route path="/" element={<EngageLayout />}>
          <Route index element={<EngageLanding />} />
          <Route path="crm" element={<CRMPage />} />
          <Route path="kommunikation" element={<KommunikationPage />} />
          <Route path="marketing" element={<MarketingPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="voice" element={<VoicePage />} />
          <Route path="workflows" element={<WorkflowsPage />} />
          <Route path="ressourcen" element={<RessourcenPage />} />
          <Route path="impressum" element={<ImpressumPage />} />
          <Route path="datenschutz" element={<DatenschutzPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default EngageApp;
