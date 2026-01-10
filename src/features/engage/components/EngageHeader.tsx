import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useCalendar } from '@/app/providers/CalendarProvider';
import { ROUTES } from '@/shared/constants/routes';
import { EXTERNAL_URLS, ASSET_URLS } from '@/shared/constants/urls';

export const EngageHeader = () => {
  const { openCalendar } = useCalendar();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [kiDropdownOpen, setKiDropdownOpen] = useState(false);
  const softwareTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const kiTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSoftwareMouseEnter = () => {
    if (softwareTimeoutRef.current) clearTimeout(softwareTimeoutRef.current);
    setSoftwareDropdownOpen(true);
  };

  const handleSoftwareMouseLeave = () => {
    softwareTimeoutRef.current = setTimeout(() => {
      setSoftwareDropdownOpen(false);
    }, 200);
  };

  const handleKiMouseEnter = () => {
    if (kiTimeoutRef.current) clearTimeout(kiTimeoutRef.current);
    setKiDropdownOpen(true);
  };

  const handleKiMouseLeave = () => {
    kiTimeoutRef.current = setTimeout(() => {
      setKiDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={ROUTES.ENGAGE.ROOT} className="flex items-center space-x-2">
            <img src={ASSET_URLS.ENGAGE_LOGO} alt="Linkty Engage" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-engage-primary transition-colors min-h-[44px] px-3"
                onMouseEnter={handleSoftwareMouseEnter}
                onMouseLeave={handleSoftwareMouseLeave}
                aria-label="Software Menü öffnen"
                aria-haspopup="true"
                aria-expanded={softwareDropdownOpen}
              >
                <span className="font-medium">Software</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {softwareDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={handleSoftwareMouseEnter}
                  onMouseLeave={handleSoftwareMouseLeave}
                >
                  <Link
                    to={ROUTES.ENGAGE.CRM}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    CRM
                  </Link>
                  <Link
                    to={ROUTES.ENGAGE.KOMMUNIKATION}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    Kommunikation
                  </Link>
                  <Link
                    to={ROUTES.ENGAGE.MARKETING}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    Marketing
                  </Link>
                  <Link
                    to={ROUTES.ENGAGE.TEAM}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    Team
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-engage-primary transition-colors min-h-[44px] px-3"
                onMouseEnter={handleKiMouseEnter}
                onMouseLeave={handleKiMouseLeave}
                aria-label="KI & Automation Menü öffnen"
                aria-haspopup="true"
                aria-expanded={kiDropdownOpen}
              >
                <span className="font-medium">KI & Automation</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {kiDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={handleKiMouseEnter}
                  onMouseLeave={handleKiMouseLeave}
                >
                  <Link
                    to={ROUTES.ENGAGE.VOICE}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    Linkty Voice
                  </Link>
                  <Link
                    to={ROUTES.ENGAGE.WORKFLOWS}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors"
                  >
                    Workflows
                  </Link>
                </div>
              )}
            </div>

            <Link
              to={ROUTES.ENGAGE.RESSOURCEN}
              className="text-gray-700 hover:text-engage-primary font-medium transition-colors"
            >
              Ressourcen
            </Link>

            <a
              href={EXTERNAL_URLS.LOGIN_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              Portalzugang
            </a>
            <button
              onClick={openCalendar}
              className="px-6 py-2 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-md hover:shadow-lg"
            >
              Demo buchen
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="space-y-2">
              <div className="font-semibold text-engage-primary text-sm">Software</div>
              <Link
                to={ROUTES.ENGAGE.CRM}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                CRM
              </Link>
              <Link
                to={ROUTES.ENGAGE.KOMMUNIKATION}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                Kommunikation
              </Link>
              <Link
                to={ROUTES.ENGAGE.MARKETING}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                Marketing
              </Link>
              <Link
                to={ROUTES.ENGAGE.TEAM}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                Team
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-engage-primary text-sm">KI & Automation</div>
              <Link
                to={ROUTES.ENGAGE.VOICE}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                Linkty Voice
              </Link>
              <Link
                to={ROUTES.ENGAGE.WORKFLOWS}
                className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded"
              >
                Workflows
              </Link>
            </div>

            <Link
              to={ROUTES.ENGAGE.RESSOURCEN}
              className="block py-2 text-sm text-gray-700 hover:bg-engage-surface rounded font-medium"
            >
              Ressourcen
            </Link>

            <a
              href={EXTERNAL_URLS.LOGIN_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              Portalzugang
            </a>
            <button
              onClick={openCalendar}
              className="block w-full text-center px-6 py-3 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all"
            >
              Demo buchen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
