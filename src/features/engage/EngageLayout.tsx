import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { EngageHeader } from '@/features/engage/components/EngageHeader';
import { EngageFooter } from '@/features/engage/components/EngageFooter';
import { CalendarModal } from '@/shared/components/ui/CalendarModal';
import { CalendarProvider, useCalendar } from '@/app/providers/CalendarProvider';

const EngageLayoutContent = () => {
  const location = useLocation();
  const { isCalendarOpen, closeCalendar } = useCalendar();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
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

export const EngageLayout = () => {
  return (
    <CalendarProvider>
      <EngageLayoutContent />
    </CalendarProvider>
  );
};
