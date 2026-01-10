import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarModal } from '@/shared/components/ui/CalendarModal';
import { ROUTES } from '@/shared/constants/routes';
import { EXTERNAL_URLS } from '@/shared/constants/urls';

const CALENDAR_IFRAME_ID = 'linkty-footer-calendar';

export const Footer = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        iframeId={CALENDAR_IFRAME_ID}
      />

      <footer className="fixed bottom-0 left-0 w-full h-[60vh] bg-gradient-to-br from-brand-blue to-brand-navy text-white z-0 flex flex-col items-center justify-center">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Bereit für das nächste Level?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Lassen Sie uns herausfinden, welcher Hebel bei Ihnen die größte Wirkung erzielt.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="px-10 py-4 bg-white text-brand-blue font-bold rounded hover:bg-brand-teal hover:text-brand-navy transition-all shadow-lg transform hover:-translate-y-1"
            >
              Gespräch vereinbaren
            </button>
            <Link
              to={ROUTES.ENGAGE.ROOT}
              className="inline-block px-10 py-4 border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all"
            >
              Portfolio ansehen
            </Link>
            <a
              href={EXTERNAL_URLS.LOGIN_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all"
            >
              Portalzugang
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-sm font-semibold tracking-wide border-t border-white/10 pt-10">
            <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-brand-teal uppercase text-xs mb-1">CRM</span>
              <Link to={ROUTES.ENGAGE.ROOT}>Linkty Engage</Link>
            </div>
            <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-brand-teal uppercase text-xs mb-1">Telefonie</span>
              <Link to={ROUTES.ENGAGE.VOICE}>Linkty Voice</Link>
            </div>
            <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-brand-teal uppercase text-xs mb-1">Design</span>
              <Link to={ROUTES.ENGAGE.MARKETING}>Linkty Studio</Link>
            </div>
            <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-brand-teal uppercase text-xs mb-1">Automation</span>
              <Link to={ROUTES.ENGAGE.WORKFLOWS}>Linkty Solutions</Link>
            </div>
          </div>

          <div className="mt-8 flex gap-6 justify-center text-xs opacity-60">
            <Link to={ROUTES.IMPRESSUM} className="hover:opacity-100 transition-opacity">
              Impressum
            </Link>
            <span>|</span>
            <Link to={ROUTES.DATENSCHUTZ} className="hover:opacity-100 transition-opacity">
              Datenschutz
            </Link>
          </div>

          <div className="mt-6 text-xs opacity-40 font-mono">
            © 2025 LINKTY GROUP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
};
