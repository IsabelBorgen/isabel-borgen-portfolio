import type { Variants } from 'framer-motion'

/**
 * Standard staggered fade-up variant used across all section components.
 * Uses custom index (i) for per-item delay.
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: 'easeOut' as const,
    },
  }),
}

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
