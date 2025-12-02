import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudienceSplit: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-engage-primary mb-4 tracking-tight">
            Ein System.{' '}
            <span className="bg-gradient-to-r from-engage-secondary to-engage-teal bg-clip-text text-transparent">
              Perfekt angepasst
            </span>
            <br />
            auf deine Branche.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wähle die Lösung, die zu deinem Business passt
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="#features"
              className="block bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-engage-secondary h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-engage-primary to-engage-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-engage-primary mb-4">
                  Für Agenturen & KMU
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  Professionelles CRM und Marketing-Automation für wachsende Unternehmen. Perfekt für Teams, die ihre Vertriebsprozesse systematisieren wollen.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-engage-secondary rounded-full" />
                    Unbegrenzte Kontakte & Pipelines
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-engage-secondary rounded-full" />
                    Omnichannel-Kommunikation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-engage-secondary rounded-full" />
                    Workflow-Automation
                  </li>
                </ul>

                <div className="flex items-center gap-2 text-engage-secondary font-semibold group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-engage-teal to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

            <Link
              to="/versicherungsmakler"
              className="relative block bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-3 border-lime-400 h-full"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-lime-400 text-lime-900 text-xs font-bold rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Spezialisiert
              </div>

              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-engage-primary mb-4 pr-20">
                  Spezialisiert auf Versicherungsmakler
                </h3>

                <p className="text-gray-600 mb-6 flex-grow font-medium">
                  Die All-in-One Lösung für Versicherungsmakler mit VEMA-Schnittstellen, Bestandsdaten-Import und branchenspezifischen Workflows.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full" />
                    VEMA-Schnittstelle integriert
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full" />
                    DIN-Norm konforme Vorlagen
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full" />
                    Bestandsdaten-Import aus MVP
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full" />
                    Automatische Vertragserinnerungen
                  </li>
                </ul>

                <div className="flex items-center gap-2 text-lime-700 font-bold group-hover:gap-3 transition-all">
                  Zur Makler-Lösung
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nicht sicher, welche Lösung passt?{' '}
          <a href="#contact" className="text-engage-secondary font-semibold hover:underline">
            Wir beraten Sie gerne
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default AudienceSplit;
