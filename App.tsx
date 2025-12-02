import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLandingPage from './components/MainLandingPage';

const EngageApp = lazy(() => import('./pages/engage/EngageApp'));
const VoicePlaceholder = lazy(() => import('./pages/VoicePlaceholder'));
const StudioPlaceholder = lazy(() => import('./pages/StudioPlaceholder'));
const SolutionsPlaceholder = lazy(() => import('./pages/SolutionsPlaceholder'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-navy">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white font-semibold">Lädt...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/engage/*" element={<EngageApp />} />
          <Route path="/voice" element={<VoicePlaceholder />} />
          <Route path="/studio" element={<StudioPlaceholder />} />
          <Route path="/solutions" element={<SolutionsPlaceholder />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
