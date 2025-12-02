import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import EngageHeader from './EngageHeader';
import EngageFooter from './EngageFooter';
import VapiLazyWrapper from '../vapi/VapiLazyWrapper';
import CalendarModal from '../shared/CalendarModal';
import { CalendarProvider, useCalendar } from '../../contexts/CalendarContext';

const EngageLayoutContent: React.FC = () => {
  const location = useLocation();
  const { isCalendarOpen, closeCalendar } = useCalendar();
  const isImpressumOrDatenschutz = location.pathname.includes('/impressum') || location.pathname.includes('/datenschutz');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {!isImpressumOrDatenschutz && <VapiLazyWrapper pageName="Engage" />}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={closeCalendar}
        iframeId="EAqjBUlT5vgXjUg1UxFG_engage"
      />
      <EngageHeader />
      <main>
        <Outlet />
      </main>
      <EngageFooter />
    </div>
  );
};

const EngageLayout: React.FC = () => {
  return (
    <CalendarProvider>
      <EngageLayoutContent />
    </CalendarProvider>
  );
};

export default EngageLayout;
