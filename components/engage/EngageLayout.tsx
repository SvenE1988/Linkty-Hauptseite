import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import EngageHeader from './EngageHeader';
import EngageFooter from './EngageFooter';
import VapiFloatingWidget from '../VapiFloatingWidget';

const EngageLayout: React.FC = () => {
  const location = useLocation();
  const isImpressumOrDatenschutz = location.pathname.includes('/impressum') || location.pathname.includes('/datenschutz');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {!isImpressumOrDatenschutz && <VapiFloatingWidget accentColor="#00a8a8" pageName="Engage" />}
      <EngageHeader />
      <main>
        <Outlet />
      </main>
      <EngageFooter />
    </div>
  );
};

export default EngageLayout;
