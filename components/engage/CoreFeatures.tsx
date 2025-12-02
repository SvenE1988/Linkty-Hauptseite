import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'CRM',
    description: 'Kontakte intelligent verwalten statt nur archivieren. Automatische Erinnerungen, Segmentierung und Follow-up-Strategien.',
    link: '/engage/crm',
    color: 'text-engage-secondary',
    bgColor: 'bg-engage-secondary/10',
  },
  {
    icon: MessageSquare,
    title: 'Kommunikation',
    description: 'WhatsApp, E-Mail und Telefon in einer Inbox. Omnichannel-Kommunikation für echte Kundennähe.',
    link: '/engage/kommunikation',
    color: 'text-engage-teal',
    bgColor: 'bg-engage-teal/10',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Kampagnen und Lead-Nurturing, die funktionieren. Automatisierte Drip-Kampagnen für Bestandskunden.',
    link: '/engage/marketing',
    color: 'text-engage-accent',
    bgColor: 'bg-engage-accent/10',
  },
  {
    icon: UserCheck,
    title: 'Team',
    description: 'Aufgaben delegieren, Verantwortlichkeiten nachverfolgen. Ihr Team arbeitet synchronisiert und effizient.',
    link: '/engage/team',
    color: 'text-engage-primary',
    bgColor: 'bg-engage-primary/10',
  },
];

const CoreFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-engage-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-4">
            Vier Säulen. Ein System.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Linkty Engage verbindet alle Ihre Vertriebsprozesse in einer durchdachten Plattform –
            speziell entwickelt für die Bedürfnisse von Finanzdienstleistern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-engage-teal"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-engage-primary mb-3">{feature.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <Link
                  to={feature.link}
                  className="inline-flex items-center text-engage-secondary font-semibold hover:text-engage-primary transition-colors group"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
