import React from 'react';
import { motion } from 'framer-motion';

interface iPhoneFrameProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const iPhoneFrame: React.FC<iPhoneFrameProps> = ({ imageUrl, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
    >
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />

        <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="absolute -right-2 top-24 w-1 h-12 bg-gray-800 rounded-l" />
      <div className="absolute -right-2 top-40 w-1 h-16 bg-gray-800 rounded-l" />
      <div className="absolute -left-2 top-32 w-1 h-16 bg-gray-800 rounded-r" />
    </motion.div>
  );
};

export default iPhoneFrame;
