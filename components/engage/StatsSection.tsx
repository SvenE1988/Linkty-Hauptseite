import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield, Users, Star, Headphones } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import BlurryBlob from './animated/BlurryBlob';

const ProgressBar: React.FC<{ value: number; delay: number }> = ({ value, delay }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-engage-secondary to-engage-teal rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      />
    </div>
  );
};

const CountUpStat: React.FC<{ end: number; suffix: string; label: string }> = ({ end, suffix, label }) => {
  const count = useCountUp(end, 2000, suffix);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-engage-primary mb-2">
        {count}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <BlurryBlob
        color="cyan"
        size="md"
        position={{ top: '20%', right: '5%' }}
        opacity={0.1}
      />
      <BlurryBlob
        color="teal"
        size="lg"
        position={{ bottom: '10%', left: '-10%' }}
        opacity={0.12}
      />
      <BlurryBlob
        color="lime"
        size="sm"
        position={{ top: '40%', left: '10%' }}
        opacity={0.08}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-engage-primary mb-4 tracking-tight">
            Zahlen, die überzeugen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Messbare Ergebnisse für Ihre Vertriebsorganisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-engage-primary to-engage-secondary rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">85% Zeitersparnis</h3>
                <p className="text-white/80">Bei administrativen Aufgaben durch intelligente Automatisierung</p>
              </div>
            </div>
            <ProgressBar value={85} delay={0.3} />
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-engage-teal/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-engage-teal" />
            </div>
            <CountUpStat end={3} suffix="x" label="Mehr Termine aus dem Bestand" />
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-lime-600" />
            </div>
            <CountUpStat end={200} suffix="+" label="Zufriedene Kunden" />
          </motion.div>

          <motion.div
            className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg text-gray-700 italic mb-2">
                  "Linkty hat unseren Vertrieb revolutioniert. Die Automatisierungen sparen uns jeden Tag Stunden, und unsere Conversion-Rate ist um 40% gestiegen."
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  — Sarah Weber, Geschäftsführerin Digitalberatung
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-engage-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-engage-accent" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-engage-primary mb-2">24/7</div>
              <p className="text-gray-600">Support & Erreichbarkeit</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-engage-primary mb-2">100%</div>
              <p className="text-gray-600">DSGVO-konform</p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-2xl p-8 text-gray-900 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">White-Label Lösung</h3>
                <p className="text-gray-800">Integriert sich nahtlos in Ihre bestehende Infrastruktur</p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="w-12 h-12 bg-white/30 rounded-full" />
                <div className="w-12 h-12 bg-white/40 rounded-full" />
                <div className="w-12 h-12 bg-white/50 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
