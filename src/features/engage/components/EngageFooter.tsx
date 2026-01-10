import { Link } from 'react-router-dom';
import { useCalendar } from '@/app/providers/CalendarProvider';
import { ROUTES } from '@/shared/constants/routes';
import { EXTERNAL_URLS, ASSET_URLS } from '@/shared/constants/urls';

export const EngageFooter = () => {
  const { openCalendar } = useCalendar();

  return (
    <footer className="bg-engage-primary text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Software</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.ENGAGE.CRM}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CRM
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.KOMMUNIKATION}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kommunikation
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.MARKETING}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.TEAM}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">KI & Automation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.ENGAGE.VOICE}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Linkty Voice
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.WORKFLOWS}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Workflows
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-gray-300 hover:text-white transition-colors">
                  Linkty Group
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.RESSOURCEN}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ressourcen
                </Link>
              </li>
              <li>
                <button
                  onClick={openCalendar}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Demo buchen
                </button>
              </li>
              <li>
                <a
                  href={EXTERNAL_URLS.LOGIN_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portalzugang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.ENGAGE.IMPRESSUM}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.ENGAGE.DATENSCHUTZ}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to={ROUTES.ENGAGE.ROOT} className="mb-4 md:mb-0">
              <img src={ASSET_URLS.ENGAGE_LOGO} alt="Linkty Engage" className="h-10" />
            </Link>
            <div className="text-sm text-gray-400">© 2025 Linkty. Alle Rechte vorbehalten.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
