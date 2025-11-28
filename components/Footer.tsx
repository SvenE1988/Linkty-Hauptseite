import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[60vh] bg-gradient-to-br from-brand-blue to-brand-navy text-white z-0 flex flex-col items-center justify-center">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Bereit für das nächste Level?
        </h2>
        <p className="text-xl text-white/80 mb-10 font-light">
          Lassen Sie uns herausfinden, welcher Hebel bei Ihnen die größte Wirkung erzielt.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-brand-blue font-bold rounded hover:bg-brand-teal hover:text-brand-navy transition-all shadow-lg transform hover:-translate-y-1">
             Gespräch vereinbaren
          </button>
          <button className="px-10 py-4 border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all">
             Portfolio ansehen
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-sm font-semibold tracking-wide border-t border-white/10 pt-10">
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">CRM</span>
            <a href="#">Linkty Engage</a>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Telefonie</span>
            <a href="#">Linkty Voice</a>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Design</span>
            <a href="#">Linkty Studio</a>
          </div>
          <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-brand-teal uppercase text-xs mb-1">Automation</span>
            <a href="#">Linkty Solutions</a>
          </div>
        </div>
        
        <div className="mt-12 text-xs opacity-40 font-mono">
          © 2025 LINKTY GROUP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;