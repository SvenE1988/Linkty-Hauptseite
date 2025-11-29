import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EngageLayout from '../../components/engage/EngageLayout';
import EngageLanding from './EngageLanding';
import CRMPage from './CRMPage';
import KommunikationPage from './KommunikationPage';
import MarketingPage from './MarketingPage';
import TeamPage from './TeamPage';
import VoicePage from './VoicePage';
import WorkflowsPage from './WorkflowsPage';
import RessourcenPage from './RessourcenPage';
import ImpressumPage from './ImpressumPage';
import DatenschutzPage from './DatenschutzPage';

const EngageApp: React.FC = () => {
  return (
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
  );
};

export default EngageApp;
