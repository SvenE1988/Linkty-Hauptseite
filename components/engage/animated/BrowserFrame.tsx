import React from 'react';
import { motion } from 'framer-motion';

interface BrowserFrameProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ imageUrl, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative bg-white rounded-lg shadow-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-gray-500 hidden sm:block">
          linkty.ai/engage
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  );
};

export default BrowserFrame;
