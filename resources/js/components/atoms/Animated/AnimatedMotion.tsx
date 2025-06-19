import { animationVariants } from '@/lib/motion/variants';
import { motion } from 'framer-motion';
import React, { ElementType, ReactNode } from 'react';

interface AnimatedMotionProps {
    children: ReactNode;
    as?: ElementType;
    variantName: keyof typeof animationVariants;
    delay?: number;
    duration?: number;
    ease?: string;
    className?: string;
}

const AnimatedMotion: React.FC<AnimatedMotionProps> = ({
    children,
    as: Tag = 'div',
    variantName,
    delay = 0,
    duration = 0.6,
    ease = 'easeOut',
    className = '',
    ...props
}) => {
    const MotionTag = motion(Tag);
    const variants = animationVariants[variantName];

    return (
        <MotionTag initial="hidden" animate="visible" transition={{ duration, delay, ease }} variants={variants} className={className} {...props}>
            {children}
        </MotionTag>
    );
};

export default AnimatedMotion;
