/**
 * Tokens de movimento unificados — animações leves e coerentes em todo o app.
 * Preferir estes a durações/easings ad-hoc espalhados pelos componentes.
 */

// Easing "suave de saída" (ease-out expressivo) — natural para entradas de UI.
export const EASE = [0.22, 1, 0.36, 1];

// Spring padrão para elementos que se movem/rearranjam (ex.: header, layout).
export const SPRING = { type: 'spring', stiffness: 380, damping: 38, mass: 0.8 };

export const DURATION = {
  fast: 0.18,
  base: 0.3,
  slow: 0.5,
};

// Entrada padrão: fade + leve subida. Use com initial/animate/exit.
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: DURATION.slow, ease: EASE },
};

// Troca de conteúdo (ex.: abas) — curta e discreta.
export const swap = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: DURATION.fast, ease: EASE },
};

// Container com stagger para listas/grids.
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

/**
 * Retorna as props de entrada respeitando `prefers-reduced-motion`.
 * Quando o usuário pede menos movimento, mantemos apenas o fade.
 */
export function reveal(reduce, { y = 16, delay = 0, duration = DURATION.slow } = {}) {
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration, delay, ease: EASE },
  };
}
