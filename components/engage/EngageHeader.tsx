import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const EngageHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [kiDropdownOpen, setKiDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/engage" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-engage-primary">
              Linkty <span className="text-engage-accent">|</span> <span className="font-semibold">Engage</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-engage-primary transition-colors"
                onMouseEnter={() => setSoftwareDropdownOpen(true)}
                onMouseLeave={() => setSoftwareDropdownOpen(false)}
              >
                <span className="font-medium">Software</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {softwareDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setSoftwareDropdownOpen(true)}
                  onMouseLeave={() => setSoftwareDropdownOpen(false)}
                >
                  <Link to="/engage/crm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    CRM
                  </Link>
                  <Link to="/engage/kommunikation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    Kommunikation
                  </Link>
                  <Link to="/engage/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    Marketing
                  </Link>
                  <Link to="/engage/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    Team
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-engage-primary transition-colors"
                onMouseEnter={() => setKiDropdownOpen(true)}
                onMouseLeave={() => setKiDropdownOpen(false)}
              >
                <span className="font-medium">KI & Automation</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {kiDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setKiDropdownOpen(true)}
                  onMouseLeave={() => setKiDropdownOpen(false)}
                >
                  <Link to="/engage/voice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    Linkty Voice
                  </Link>
                  <Link to="/engage/workflows" className="block px-4 py-2 text-sm text-gray-700 hover:bg-engage-surface transition-colors">
                    Workflows
                  </Link>
                </div>
              )}
            </div>

            <Link to="/engage/ressourcen" className="text-gray-700 hover:text-engage-primary font-medium transition-colors">
              Ressourcen
            </Link>

            <a
              href="#demo"
              className="px-6 py-2 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-md hover:shadow-lg"
            >
              Demo buchen
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <Link to="/engage/crm" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                CRM
              </Link>
              <Link to="/engage/kommunikation" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                Kommunikation
              </Link>
              <Link to="/engage/marketing" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                Marketing
              </Link>
              <Link to="/engage/team" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                Team
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-engage-primary text-sm">KI & Automation</div>
              <Link to="/engage/voice" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                Linkty Voice
              </Link>
              <Link to="/engage/workflows" className="block pl-4 py-2 text-sm text-gray-700 hover:bg-engage-surface rounded">
                Workflows
              </Link>
            </div>

            <Link to="/engage/ressourcen" className="block py-2 text-sm text-gray-700 hover:bg-engage-surface rounded font-medium">
              Ressourcen
            </Link>

            <a
              href="#demo"
              className="block text-center px-6 py-3 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all"
            >
              Demo buchen
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default EngageHeader;
