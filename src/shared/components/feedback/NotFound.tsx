import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold text-brand-teal mb-4">404</h1>
        <h2 className="text-2xl mb-8">Seite nicht gefunden</h2>
        <Link
          to={ROUTES.HOME}
          className="px-6 py-3 bg-brand-teal text-brand-navy rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
};
