import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';

interface LegalHeaderProps {
  title: string;
}

export const LegalHeader = ({ title }: LegalHeaderProps) => {
  return (
    <header className="bg-brand-navy text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to={ROUTES.HOME}
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
