import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { MessageSquare, Mail, Phone, Inbox } from 'lucide-react';

export const KommunikationPage = () => {
  usePageTitle('Kommunikation - Linkty | Engage');

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-engage-teal to-engage-secondary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Alle Kanäle. Eine Inbox.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              WhatsApp, E-Mail und Telefon an einem Ort. Ihre Kunden kommunizieren, wie sie
              wollen – Sie behalten den Überblick.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-engage-surface p-8 rounded-xl">
              <MessageSquare className="w-12 h-12 text-engage-teal mb-4" />
              <h3 className="text-2xl font-bold text-engage-primary mb-3">WhatsApp Business</h3>
              <p className="text-gray-600">
                Professionelle WhatsApp-Integration mit Vorlagen, Automatisierung und
                Team-Funktionen.
              </p>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl">
              <Mail className="w-12 h-12 text-engage-secondary mb-4" />
              <h3 className="text-2xl font-bold text-engage-primary mb-3">E-Mail-Management</h3>
              <p className="text-gray-600">
                Intelligente E-Mail-Automatisierung mit Tracking, Vorlagen und Follow-up-Sequenzen.
              </p>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl">
              <Phone className="w-12 h-12 text-engage-accent mb-4" />
              <h3 className="text-2xl font-bold text-engage-primary mb-3">Telefonie</h3>
              <p className="text-gray-600">
                Integrierte Telefonie mit Anrufprotokollen und automatischer Kontaktzuordnung.
              </p>
            </div>

            <div className="bg-engage-surface p-8 rounded-xl">
              <Inbox className="w-12 h-12 text-engage-primary mb-4" />
              <h3 className="text-2xl font-bold text-engage-primary mb-3">Unified Inbox</h3>
              <p className="text-gray-600">
                Alle Nachrichten an einem Ort, priorisiert und mit vollständigem Kundenverlauf.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-engage-primary text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Omnichannel-Kommunikation starten</h3>
          <a
            href="#demo"
            className="inline-block px-8 py-4 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-lg"
          >
            Demo buchen
          </a>
        </div>
      </section>
    </div>
  );
};
