import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { LegalHeader } from '@/features/legal/components/LegalHeader';
import { LegalSection } from '@/features/legal/components/LegalSection';
import { SimpleLegalFooter } from '@/features/legal/components/SimpleLegalFooter';
import { datenschutzSections } from '@/features/legal/content/datenschutz-content';

export const DatenschutzPage = () => {
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
