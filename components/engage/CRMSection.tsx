import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, PieChart } from 'lucide-react';
import IPadFrame from './animated/iPadFrame';
import BlurryBlob from './animated/BlurryBlob';

const CRMSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <BlurryBlob
        color="lime"
        size="lg"
        position={{ top: '20%', left: '-5%' }}
        opacity={0.18}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-lime-100 text-lime-700 text-xs font-bold tracking-widest uppercase rounded-full">
              Command Center
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-engage-primary tracking-tight">
              Alles an einem Ort –<br />
              <span className="bg-gradient-to-r from-engage-secondary to-lime-600 bg-clip-text text-transparent">
                Dein CRM Command Center
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Behalten Sie den Überblick über alle Kundenkontakte, Deals und Aufgaben. Mit unserer visuellen Pipeline-Verwaltung sehen Sie sofort, wo jeder Kunde steht und was als Nächstes zu tun ist.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Visuelle Pipeline-Verwaltung</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Kanban-Board für intuitive Deal-Übersicht
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">360-Grad Kundenansicht</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Alle Interaktionen, Verträge und Notizen an einem Ort
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Team-Kollaboration</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Aufgaben delegieren und Fortschritt in Echtzeit verfolgen
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-white rounded-xl p-6 shadow-md border border-lime-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                  <PieChart className="w-8 h-8 text-lime-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-engage-primary">73%</p>
                  <p className="text-sm text-gray-600">Durchschnittliche Win-Rate unserer Nutzer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <IPadFrame
                imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
                alt="Linkty CRM Pipeline Board mit Kanban-Ansicht"
              />

              <motion.div
                className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-2xl p-4 w-32 h-32 hidden lg:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.73 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                    style={{
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50% 50%',
                    }}
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy="7"
                    className="text-xl font-bold fill-engage-primary"
                  >
                    73%
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMSection;
