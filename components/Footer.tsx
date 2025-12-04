import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {showCalendar && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setShowCalendar(false)}>
          <div className="bg-white rounded-lg w-full max-w-5xl max-h-[95vh] overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg"
            >
              ×
            </button>
            <div className="p-4 sm:p-6">
              <iframe
                src="https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', height: '85vh' }}
                scrolling="no"
                id="EAqjBUlT5vgXjUg1UxFG_1764391826265"
              />
            </div>
          </div>
        </div>
      )}
      <footer className="fixed bottom-0 left-0 w-full min-h-[60vh] h-auto max-h-screen overflow-y-auto bg-gradient-to-br from-brand-blue to-brand-navy text-white z-0 flex flex-col items-center justify-center py-8 sm:py-12">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Bereit für das nächste Level?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 font-light">
          Lassen Sie uns herausfinden, welcher Hebel bei Ihnen die größte Wirkung erzielt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
          <button
            onClick={() => setShowCalendar(true)}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 min-h-[48px] bg-white text-brand-blue font-bold rounded hover:bg-brand-teal hover:text-brand-navy transition-all shadow-lg transform hover:-translate-y-1"
          >
             Gespräch vereinbaren
          </button>
          <Link
            to="/engage"
            className="inline-block w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 min-h-[48px] border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all text-center"
          >
             Portfolio ansehen
          </Link>
          <a
            href="https://login.linkty.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 min-h-[48px] border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all text-center"
          >
             Portalzugang
          </a>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-16 lg:mt-20 text-sm font-semibold tracking-wide border-t border-white/10 pt-8 sm:pt-10">
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">CRM</span>
            <Link to="/engage">Linkty Engage</Link>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Telefonie</span>
            <Link to="/voice">Linkty Voice</Link>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Design</span>
            <Link to="/studio">Linkty Studio</Link>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Automation</span>
            <Link to="/solutions">Linkty Solutions</Link>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 justify-center text-xs opacity-60 flex-wrap">
          <Link to="/impressum" className="inline-flex items-center justify-center min-h-[44px] px-2 hover:opacity-100 transition-opacity">Impressum</Link>
          <span>|</span>
          <Link to="/datenschutz" className="inline-flex items-center justify-center min-h-[44px] px-2 hover:opacity-100 transition-opacity">Datenschutz</Link>
        </div>

        <div className="mt-6 text-xs opacity-40 font-mono">
          © 2025 LINKTY GROUP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;