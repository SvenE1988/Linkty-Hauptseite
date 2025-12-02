import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Bell } from 'lucide-react';
import IPhoneFrame from './animated/iPhoneFrame';
import BlurryBlob from './animated/BlurryBlob';

const MobileAppSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <BlurryBlob
        color="cyan"
        size="lg"
        position={{ bottom: '10%', left: '-10%' }}
        opacity={0.15}
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
            <div className="inline-block px-3 py-1 bg-engage-teal/10 text-engage-teal text-xs font-bold tracking-widest uppercase rounded-full">
              Mobile First
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-engage-primary tracking-tight">
              Dein Pocket Office –<br />
              <span className="text-engage-secondary">Dein Business immer dabei</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Ob im Außendienst oder unterwegs – mit der Linkty Mobile App haben Sie Ihr komplettes CRM immer dabei. Bearbeiten Sie Leads, buchen Sie Termine und reagieren Sie sofort auf wichtige Events.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Unterwegs Leads bearbeiten</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Vollständiger Zugriff auf alle Kundendaten und Notizen
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Push-Benachrichtigungen</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Sofortige Updates zu neuen Leads und wichtigen Terminen
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-engage-teal flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-engage-primary">Offline-Zugriff</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Arbeiten Sie auch ohne Internetverbindung weiter
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-sm mx-auto">
              <IPhoneFrame
                imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
                alt="Linkty Mobile App Dashboard im Dark Mode"
              />

              <motion.div
                className="absolute -right-4 top-24 bg-white rounded-xl shadow-xl p-4 max-w-[180px] border border-engage-teal/20"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-engage-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-engage-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-engage-primary">Neuer Termin gebucht</p>
                    <p className="text-xs text-gray-600 mt-0.5">14:00 Uhr</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
