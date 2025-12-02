import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Bot, Target } from 'lucide-react';

const flowNodes = [
  {
    icon: Globe,
    label: 'Traffic & Leads',
    description: 'Besucher werden zu qualifizierten Leads',
  },
  {
    icon: Layout,
    label: 'Landing Pages',
    description: 'Überzeugende Seiten für jede Zielgruppe',
  },
  {
    icon: Bot,
    label: 'CRM & Automation',
    description: 'Automatisierte Follow-ups & Workflows',
  },
  {
    icon: Target,
    label: 'Abschlüsse & Wachstum',
    description: 'Mehr Termine, mehr Umsatz',
  },
];

const FlowDiagram: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-engage-primary mb-6 tracking-tight">
            So verändern wir deinen Alltag
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Berührung bis zum Abschluss – ein durchdachter Prozess, der funktioniert.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-engage-primary via-engage-secondary to-engage-teal transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {flowNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: [0, 1.1, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-xl flex items-center justify-center mb-4 border-4 border-engage-teal/20 relative z-10">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-engage-secondary" />
                    </div>

                    <h3 className="text-xl font-bold text-engage-primary mb-2">
                      {node.label}
                    </h3>
                    <p className="text-sm text-gray-600 max-w-[200px]">
                      {node.description}
                    </p>
                  </div>

                  {index < flowNodes.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-engage-teal to-engage-secondary"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}

                  {index < flowNodes.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <motion.div
                        className="w-0.5 h-12 bg-gradient-to-b from-engage-teal to-engage-secondary"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
