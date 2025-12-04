import React from 'react';
import { Link } from 'react-router-dom';

interface SimpleLegalFooterProps {
  variant?: 'dark' | 'navy';
  accentColor?: string;
}

const SimpleLegalFooter: React.FC<SimpleLegalFooterProps> = ({
  variant = 'dark',
  accentColor = 'brand-teal'
}) => {
  const bgClass = variant === 'navy' ? 'bg-brand-navy' : 'bg-gray-900';

  const colorVariants: Record<string, string> = {
    'voice-accent': 'hover:text-voice-accent',
    'studio-accent': 'hover:text-studio-accent',
    'solutions-accent': 'hover:text-solutions-accent',
    'brand-teal': 'hover:text-brand-teal',
    'engage-teal': 'hover:text-engage-teal',
  };

  const hoverClass = colorVariants[accentColor] || 'hover:text-brand-teal';

  return (
    <footer className={`${bgClass} text-white py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex gap-4 sm:gap-6 justify-center text-sm mb-4 flex-wrap">
          <Link
            to="/"
            className={`inline-flex items-center justify-center min-h-[44px] px-2 ${hoverClass} transition-colors`}
          >
            Startseite
          </Link>
          <span className="text-gray-600 self-center">|</span>
          <a
            href="https://login.linkty.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center min-h-[44px] px-2 ${hoverClass} transition-colors`}
          >
            Portalzugang
          </a>
          <span className="text-gray-600 self-center">|</span>
          <Link
            to="/impressum"
            className={`inline-flex items-center justify-center min-h-[44px] px-2 ${hoverClass} transition-colors`}
          >
            Impressum
          </Link>
          <span className="text-gray-600 self-center">|</span>
          <Link
            to="/datenschutz"
            className={`inline-flex items-center justify-center min-h-[44px] px-2 ${hoverClass} transition-colors`}
          >
            Datenschutz
          </Link>
        </div>
        <p className="text-xs opacity-60">© 2025 LINKTY GROUP. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default SimpleLegalFooter;
