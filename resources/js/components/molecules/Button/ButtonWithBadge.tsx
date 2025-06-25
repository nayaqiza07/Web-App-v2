import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { easeOut, motion } from 'framer-motion';
import React from 'react';

interface ButtonWithBadgeProps {
    title: string;
    badgeNumber: number;
    className?: string;
    index?: number;
}

const ButtonWithBadge: React.FC<ButtonWithBadgeProps> = ({ title = 'Title', badgeNumber = 0, className = '', index }) => {
    const buttonWithBadgeVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: easeOut,
            },
        }),
    };

    return (
        <motion.div custom={index} variants={buttonWithBadgeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Button
                variant="ghost"
                className={cn(
                    'hover:bg-accent hover:border-border flex w-full justify-between border border-transparent p-2 text-xs font-bold',
                    className,
                )}
            >
                <span>{title}</span>
                <Badge variant="outline" className="bg-card border">
                    {badgeNumber}
                </Badge>
            </Button>
        </motion.div>
    );
};

export default ButtonWithBadge;
