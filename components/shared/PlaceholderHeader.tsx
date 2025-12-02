import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderHeaderProps {
  logoSrc: string;
  logoAlt: string;
  onDemoClick: () => void;
  primaryColor?: string;
}

const PlaceholderHeader: React.FC<PlaceholderHeaderProps> = ({
  logoSrc,
  logoAlt,
  onDemoClick,
  primaryColor = 'blue-600'
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Zurück zur Startseite">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-10"
            loading="eager"
          />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://login.linkty.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
          >
            Portalzugang
          </a>
          <button
            onClick={onDemoClick}
            className={`px-6 py-2 bg-${primaryColor} text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg min-h-[44px]`}
            aria-label="Demo-Termin buchen"
          >
            Demo buchen
          </button>
          <Link
            to="/"
            className="hidden md:inline-block text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Zurück
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PlaceholderHeader;
