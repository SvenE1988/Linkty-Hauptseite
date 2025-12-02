import React from 'react';
import { motion } from 'framer-motion';

interface BlurryBlobProps {
  color: 'cyan' | 'magenta' | 'lime' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  opacity?: number;
}

const colorClasses = {
  cyan: 'bg-cyan-400',
  magenta: 'bg-pink-400',
  lime: 'bg-lime-400',
  teal: 'bg-teal-400',
};

const sizeClasses = {
  sm: 'w-32 h-32 md:w-48 md:h-48',
  md: 'w-48 h-48 md:w-72 md:h-72',
  lg: 'w-64 h-64 md:w-96 md:h-96',
};

const BlurryBlob: React.FC<BlurryBlobProps> = ({
  color,
  size = 'md',
  position,
  opacity = 0.15,
}) => {
  return (
    <motion.div
      className={`absolute ${colorClasses[color]} ${sizeClasses[size]} rounded-full`}
      style={{
        ...position,
        filter: 'blur(80px)',
        opacity,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    />
  );
};

export default BlurryBlob;
