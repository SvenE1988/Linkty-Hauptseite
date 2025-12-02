import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  icon: LucideIcon;
  text: string;
  subtext?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  icon: Icon,
  text,
  subtext,
  position,
  delay = 0,
}) => {
  return (
    <motion.div
      className="absolute bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 p-4 max-w-[200px]"
      style={position}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-engage-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-engage-teal" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-engage-primary truncate">{text}</p>
          {subtext && (
            <p className="text-xs text-gray-600 mt-1">{subtext}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
