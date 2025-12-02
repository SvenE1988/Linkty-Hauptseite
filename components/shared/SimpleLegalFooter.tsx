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

  return (
    <footer className={`${bgClass} text-white py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex gap-6 justify-center text-sm mb-4 flex-wrap">
          <Link
            to="/"
            className={`hover:text-${accentColor} transition-colors`}
          >
            Startseite
          </Link>
          <span className="text-gray-600">|</span>
          <a
            href="https://login.linkty.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-${accentColor} transition-colors`}
          >
            Portalzugang
          </a>
          <span className="text-gray-600">|</span>
          <Link
            to="/impressum"
            className={`hover:text-${accentColor} transition-colors`}
          >
            Impressum
          </Link>
          <span className="text-gray-600">|</span>
          <Link
            to="/datenschutz"
            className={`hover:text-${accentColor} transition-colors`}
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
