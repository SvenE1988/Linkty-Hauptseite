import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useCalendar } from '../../contexts/CalendarContext';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  const { openCalendar } = useCalendar();

  return (
    <section id="demo" className="relative py-32 bg-gradient-to-br from-engage-primary via-engage-secondary to-engage-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-engage-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            Jetzt starten
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Bereit für mehr Umsatz<br />
            <span className="bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text text-transparent">
              mit System?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Starten Sie jetzt mit Linkty Engage und transformieren Sie Ihre Vertriebsprozesse
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              onClick={openCalendar}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-engage-primary font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 group min-h-[56px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt Demo buchen
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/versicherungsmakler"
                className="inline-flex items-center justify-center px-10 py-5 bg-lime-400 text-gray-900 font-bold text-lg rounded-xl hover:bg-lime-300 transition-all shadow-2xl hover:shadow-3xl group min-h-[56px]"
              >
                Zur Makler-Lösung
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <CheckCircle className="w-5 h-5 text-lime-300" />
              <span>Kostenlose Demo</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <CheckCircle className="w-5 h-5 text-lime-300" />
              <span>Keine Kreditkarte nötig</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <CheckCircle className="w-5 h-5 text-lime-300" />
              <span>DSGVO-konform</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <CheckCircle className="w-5 h-5 text-lime-300" />
              <span>Setup in 24h</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-lime-400/20 to-teal-400/20 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 h-48 border border-white/20" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 h-48 border border-white/20" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 h-48 border border-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
