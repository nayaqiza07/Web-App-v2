import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { easeOut, motion } from 'framer-motion';
import React from 'react';

interface ButtonWithBadgeProps {
    title: string;
    linkTo: string;
    badgeNumber: number;
    className?: string;
    index?: number;
    active?: boolean;
}

const ButtonWithBadge: React.FC<ButtonWithBadgeProps> = ({
    active = false,
    title = 'Title',
    linkTo = route('#'),
    badgeNumber = 0,
    className = '',
    index,
}) => {
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
            <Link href={linkTo}>
                <Button
                    variant="ghost"
                    className={cn(
                        'hover:bg-accent hover:border-border flex w-full justify-between border border-transparent p-2 text-xs font-bold',
                        active && 'border-border bg-accent',
                        className,
                    )}
                >
                    <span>{title}</span>
                    {badgeNumber > 0 && (
                        <Badge variant="outline" className="bg-card border">
                            {badgeNumber}
                        </Badge>
                    )}
                </Button>
            </Link>
        </motion.div>
    );
};

export default ButtonWithBadge;
