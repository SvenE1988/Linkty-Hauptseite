import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import LegalHeader from '../components/legal/LegalHeader';
import LegalSection from '../components/legal/LegalSection';
import SimpleLegalFooter from '../components/shared/SimpleLegalFooter';
import { datenschutzSections } from '../content/datenschutz-content';

const DatenschutzPage: React.FC = () => {
  usePageTitle('Datenschutzerklärung | Linkty Group');

  return (
    <div className="min-h-screen bg-white">
      <LegalHeader title="Datenschutzerklärung" />

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {datenschutzSections.map((section) => (
              <LegalSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </div>

      <SimpleLegalFooter variant="navy" />
    </div>
  );
};

export default DatenschutzPage;
