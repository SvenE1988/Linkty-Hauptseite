import { useScroll, useTransform, MotionValue } from 'framer-motion';

export const useScrollProgress = (): MotionValue<number> => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
};
