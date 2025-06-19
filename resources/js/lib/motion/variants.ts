// lib/motion/variants.ts

import { Variants } from 'framer-motion';

// Kumpulan animasi reusable
export const animationVariants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeOut: {
        hidden: { opacity: 1 },
        visible: { opacity: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    },
    scaleOut: {
        hidden: { opacity: 0, scale: 1 },
        visible: { opacity: 1, scale: 0 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    },
    slideDown: {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    },
    scaleSlideUp: {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0 },
    },
} satisfies Record<string, Variants>;

// Export type key-nya juga untuk type-safety
export type AnimationVariantKey = keyof typeof animationVariants;
