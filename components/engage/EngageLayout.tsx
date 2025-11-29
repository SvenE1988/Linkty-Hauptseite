import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import EngageHeader from './EngageHeader';
import EngageFooter from './EngageFooter';

const EngageLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <EngageHeader />
      <main>
        <Outlet />
      </main>
      <EngageFooter />
    </div>
  );
};

export default EngageLayout;
