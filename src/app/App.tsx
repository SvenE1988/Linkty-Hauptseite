import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { LoadingSpinner } from '@/shared/components/ui/LoadingSpinner';
import { ScrollToTop } from '@/shared/components/layout/ScrollToTop';
import { NotFound } from '@/shared/components/feedback/NotFound';
import { LandingPage } from '@/features/landing/LandingPage';
import { CalendarModal } from '@/shared/components/ui/CalendarModal';

// Lazy load features for better initial load
const EngageApp = lazy(() =>
  import('@/features/engage/EngageApp').then((module) => ({ default: module.EngageApp }))
);
const ImpressumPage = lazy(() =>
  import('@/features/legal/pages/ImpressumPage').then((module) => ({ default: module.ImpressumPage }))
);
const DatenschutzPage = lazy(() =>
  import('@/features/legal/pages/DatenschutzPage').then((module) => ({ default: module.DatenschutzPage }))
);

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Routes>
          {/* Landing Page */}
          <Route path={ROUTES.HOME} element={<LandingPage />} />

          {/* Legal Pages */}
          <Route path={ROUTES.IMPRESSUM} element={<ImpressumPage />} />
          <Route path={ROUTES.DATENSCHUTZ} element={<DatenschutzPage />} />

          {/* Engage Sub-App */}
          <Route path={`${ROUTES.ENGAGE.ROOT}/*`} element={<EngageApp />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Global Calendar Modal */}
      <CalendarModal />
    </>
  );
};
