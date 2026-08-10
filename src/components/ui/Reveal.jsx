import { motion, useReducedMotion } from 'framer-motion';
import { reveal } from '../../animations/motion';

/**
 * Envolve conteúdo com uma entrada suave ao entrar na viewport (uma única vez).
 * Respeita `prefers-reduced-motion` automaticamente.
 */
export default function Reveal({ children, className = '', delay = 0, y = 16, as = 'div' }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag className={className} {...reveal(reduce, { y, delay })}>
      {children}
    </MotionTag>
  );
}
