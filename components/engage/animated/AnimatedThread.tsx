import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedThread: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#023059" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3973bf" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#76d9bd" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 50 0 Q 30 200 50 400 Q 70 600 50 800 Q 30 1000 50 1200 Q 70 1400 50 1600 L 50 2000"
          stroke="url(#threadGradient)"
          strokeWidth="2"
          fill="none"
          style={{ pathLength }}
          className="hidden md:block"
        />

        <motion.path
          d="M 50 0 L 50 2000"
          stroke="url(#threadGradient)"
          strokeWidth="1.5"
          fill="none"
          style={{ pathLength }}
          className="md:hidden"
        />
      </svg>
    </div>
  );
};

export default AnimatedThread;
