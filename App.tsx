import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLandingPage from './components/MainLandingPage';
import LoadingSpinner from './components/shared/LoadingSpinner';

const EngageApp = lazy(() => import('./pages/engage/EngageApp'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner variant="navy" />}>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/engage/*" element={<EngageApp />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
