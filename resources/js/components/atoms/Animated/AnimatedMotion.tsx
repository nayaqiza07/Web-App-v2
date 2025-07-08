import { animationVariants } from '@/lib/motion/variants';
import { motion, MotionProps } from 'framer-motion';
import React, { ElementType, ReactNode } from 'react';

interface AnimatedMotionProps {
    children: ReactNode;
    as?: ElementType;
    variantName: keyof typeof animationVariants;
    initial?: string | boolean;
    animate?: MotionProps['whileHover'] | string;
    whileInView?: string;
    whileHover?: MotionProps['whileHover'];
    viewport?: {
        once?: boolean;
        amount?: number;
    };
    delay?: number;
    duration?: number;
    ease?: string;
    className?: string;
}

const AnimatedMotion: React.FC<AnimatedMotionProps> = ({
    children,
    as: Tag = 'div',
    variantName,
    initial = 'hidden',
    animate,
    whileInView,
    whileHover,
    viewport,
    delay = 0,
    duration = 0.6,
    ease = 'easeOut',
    className = '',
    ...props
}) => {
    const MotionTag = motion.create(Tag);
    const variants = animationVariants[variantName];

    return (
        <MotionTag
            initial={initial}
            animate={animate}
            layout
            whileInView={whileInView}
            whileHover={whileHover}
            viewport={viewport}
            transition={{ duration, delay, ease }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </MotionTag>
    );
};

export default AnimatedMotion;
