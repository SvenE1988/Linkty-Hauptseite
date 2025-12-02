import React from 'react';
import { motion } from 'framer-motion';

interface iPadFrameProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const iPadFrame: React.FC<iPadFrameProps> = ({ imageUrl, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative bg-gray-900 rounded-[2rem] p-4 shadow-2xl">
        <div className="relative bg-white rounded-[1.5rem] overflow-hidden">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default iPadFrame;
