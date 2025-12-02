import React from 'react';

interface LegalSectionProps {
  id: string;
  title: string;
  subsections: Array<{
    subtitle?: string;
    content: string | React.ReactNode;
  }>;
}

const LegalSection: React.FC<LegalSectionProps> = ({ id, title, subsections }) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">
        {title}
      </h2>
      {subsections.map((sub, idx) => (
        <div key={idx} className="mb-6">
          {sub.subtitle && (
            <h3 className="text-xl font-bold text-brand-navy mt-6 mb-3">
              {sub.subtitle}
            </h3>
          )}
          <div className="mb-4 text-gray-700">
            {typeof sub.content === 'string' ? (
              <p>{sub.content}</p>
            ) : (
              sub.content
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default LegalSection;
