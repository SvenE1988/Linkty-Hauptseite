import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link2, Mail, MessageSquare, Calendar, Zap, Database, ShieldCheck } from 'lucide-react';

const integrations = [
  { name: 'Zapier', icon: Zap, color: 'text-orange-600', bgColor: 'bg-orange-100', featured: true },
  { name: 'WhatsApp', icon: MessageSquare, color: 'text-green-600', bgColor: 'bg-green-100' },
  { name: 'Gmail', icon: Mail, color: 'text-red-600', bgColor: 'bg-red-100' },
  { name: 'Outlook', icon: Mail, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { name: 'Google Calendar', icon: Calendar, color: 'text-blue-500', bgColor: 'bg-blue-100' },
  { name: 'Slack', icon: MessageSquare, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { name: 'Mailchimp', icon: Mail, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  { name: 'HubSpot', icon: Database, color: 'text-orange-500', bgColor: 'bg-orange-50' },
];

const IntegrationsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-engage-teal/10 text-engage-primary rounded-full text-sm font-semibold mb-6">
            <Link2 className="w-4 h-4" />
            Integrationen
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-engage-primary mb-4 tracking-tight">
            Ergänzt statt ersetzt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nahtlose Anbindung an Ihre bestehenden Systeme und Tools
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="hidden md:block">
            <div className="relative h-[500px]">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-engage-primary to-engage-secondary rounded-3xl shadow-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Linkty</span>
                </div>
              </motion.div>

              {integrations.map((integration, index) => {
                const angle = (index / integrations.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = integration.icon;

                return (
                  <React.Fragment key={index}>
                    <motion.div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div
                        className={`relative w-24 h-24 ${integration.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center ${
                          integration.featured ? 'ring-2 ring-orange-400 ring-offset-2' : ''
                        }`}
                      >
                        <Icon className={`w-10 h-10 ${integration.color}`} />

                        {hoveredIndex === index && (
                          <motion.div
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-lg"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {integration.name}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    <motion.svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      width={radius * 2 + 200}
                      height={radius * 2 + 200}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <motion.line
                        x1={radius + 100}
                        y1={radius + 100}
                        x2={x + radius + 100}
                        y2={y + radius + 100}
                        stroke={integration.featured ? '#f97316' : '#3973bf'}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      />
                    </motion.svg>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={index}
                  className={`${integration.bgColor} rounded-xl p-6 shadow-md ${
                    integration.featured ? 'ring-2 ring-orange-400' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon className={`w-8 h-8 ${integration.color} mb-2`} />
                  <p className="text-sm font-semibold text-gray-800">{integration.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-engage-secondary to-engage-primary text-white rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sie nutzen bereits andere Systeme?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Perfekt. Linkty Engage ergänzt Ihre bestehende Infrastruktur und macht daraus eine
            aktive Vertriebsmaschine – ohne Migration, ohne Datenverlust.
          </p>
          <a
            href="#demo"
            className="inline-block px-8 py-4 bg-white text-engage-primary font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl min-h-[48px]"
          >
            Integration besprechen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
