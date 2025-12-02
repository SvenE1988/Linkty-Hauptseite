import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';
import BrowserFrame from './animated/BrowserFrame';
import BlurryBlob from './animated/BlurryBlob';

const AutomationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <BlurryBlob
        color="magenta"
        size="md"
        position={{ top: '10%', right: '-10%' }}
        opacity={0.12}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <BrowserFrame
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
              alt="Linkty Workflow-Builder mit Drag & Drop Interface"
            />

            <motion.svg
              className="absolute top-1/4 left-1/4 w-12 h-12 pointer-events-none hidden lg:block"
              viewBox="0 0 50 50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#3973bf"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.path
                d="M 15 25 L 22 32 L 35 18"
                fill="none"
                stroke="#3973bf"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
              />
            </motion.svg>
          </motion.div>

          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-xs font-bold tracking-widest uppercase rounded-full">
              Automation
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-engage-primary tracking-tight">
              Automatisierung,<br />
              <span className="bg-gradient-to-r from-engage-secondary to-pink-500 bg-clip-text text-transparent">
                die begeistert
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Erstellen Sie komplexe Workflows ohne eine Zeile Code. Mit unserem intuitiven Drag & Drop Builder automatisieren Sie Follow-ups, Kampagnen und Kundeninteraktionen – in Minuten statt Wochen.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Visueller Workflow-Builder</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Intuitive Oberfläche für komplexe Automatisierungen
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Trigger-basierte Kampagnen</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Reagieren Sie automatisch auf Kundenverhalten
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Bis zu 85% Zeitersparnis</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Automatisieren Sie repetitive Aufgaben vollständig
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-sm text-gray-600 italic">
                "Wir haben unsere Conversion-Rate um 40% gesteigert, nur durch intelligente Automatisierungen."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
