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
  const colorVariants: Record<string, string> = {
    'voice-primary': 'bg-voice-primary hover:opacity-90',
    'studio-primary': 'bg-studio-primary hover:opacity-90',
    'solutions-primary': 'bg-solutions-primary hover:opacity-90',
    'blue-600': 'bg-blue-600 hover:opacity-90',
  };

  const buttonClass = colorVariants[primaryColor] || 'bg-blue-600 hover:opacity-90';

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
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://login.linkty.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 sm:px-6 py-2 min-h-[44px] border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Portalzugang</span>
            <span className="sm:hidden">Portal</span>
          </a>
          <button
            onClick={onDemoClick}
            className={`px-4 sm:px-6 py-2 ${buttonClass} text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg min-h-[44px] text-sm sm:text-base`}
            aria-label="Demo-Termin buchen"
          >
            Demo
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center min-h-[44px] px-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Zurück zur Startseite"
          >
            <span className="hidden md:inline">← Zurück</span>
            <span className="md:hidden">←</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PlaceholderHeader;
