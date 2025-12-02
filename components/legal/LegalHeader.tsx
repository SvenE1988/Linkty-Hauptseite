import React from 'react';
import { Link } from 'react-router-dom';

interface LegalHeaderProps {
  title: string;
}

const LegalHeader: React.FC<LegalHeaderProps> = ({ title }) => {
  return (
    <header className="bg-brand-navy text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-brand-teal hover:text-white transition-colors"
          aria-label="Zurück zur Startseite"
        >
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default LegalHeader;
