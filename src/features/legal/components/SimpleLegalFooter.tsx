import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { EXTERNAL_URLS } from '@/shared/constants/urls';

interface SimpleLegalFooterProps {
  variant?: 'dark' | 'navy';
  hoverColorClass?: string;
}

export const SimpleLegalFooter = ({
  variant = 'dark',
  hoverColorClass = 'hover:text-brand-teal',
}: SimpleLegalFooterProps) => {
  const bgClass = variant === 'navy' ? 'bg-brand-navy' : 'bg-gray-900';

  return (
    <footer className={`${bgClass} text-white py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex gap-6 justify-center text-sm mb-4 flex-wrap">
          <Link to={ROUTES.HOME} className={`${hoverColorClass} transition-colors`}>
            Startseite
          </Link>
          <span className="text-gray-600">|</span>
          <a
            href={EXTERNAL_URLS.LOGIN_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColorClass} transition-colors`}
          >
            Portalzugang
          </a>
          <span className="text-gray-600">|</span>
          <Link to={ROUTES.IMPRESSUM} className={`${hoverColorClass} transition-colors`}>
            Impressum
          </Link>
          <span className="text-gray-600">|</span>
          <Link to={ROUTES.DATENSCHUTZ} className={`${hoverColorClass} transition-colors`}>
            Datenschutz
          </Link>
        </div>
        <p className="text-xs opacity-60">© 2025 LINKTY GROUP. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
