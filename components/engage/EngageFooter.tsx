import React from 'react';
import { Link } from 'react-router-dom';

const EngageFooter: React.FC = () => {
  return (
    <footer className="bg-engage-primary text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Software</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/engage/crm" className="text-gray-300 hover:text-white transition-colors">
                  CRM
                </Link>
              </li>
              <li>
                <Link to="/engage/kommunikation" className="text-gray-300 hover:text-white transition-colors">
                  Kommunikation
                </Link>
              </li>
              <li>
                <Link to="/engage/marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/engage/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">KI & Automation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/engage/voice" className="text-gray-300 hover:text-white transition-colors">
                  Linkty Voice
                </Link>
              </li>
              <li>
                <Link to="/engage/workflows" className="text-gray-300 hover:text-white transition-colors">
                  Workflows
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Linkty Group
                </Link>
              </li>
              <li>
                <Link to="/engage/ressourcen" className="text-gray-300 hover:text-white transition-colors">
                  Ressourcen
                </Link>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  Demo buchen
                </a>
              </li>
              <li>
                <a href="https://login.linkty.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Portalzugang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-engage-accent">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/engage/impressum" className="text-gray-300 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/engage/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/engage" className="mb-4 md:mb-0">
              <img
                src="https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a888e83db21530b468bdb.png"
                alt="Linkty Engage"
                className="h-10"
              />
            </Link>
            <div className="text-sm text-gray-400">
              © 2025 Linkty. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EngageFooter;
