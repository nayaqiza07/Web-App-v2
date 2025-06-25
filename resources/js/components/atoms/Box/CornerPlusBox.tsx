import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CornerPlusBoxProps {
    children: ReactNode;
    variant?: 'default' | 'blue';
    border?: 'solid' | 'dashed';
    borderColor?: 'default' | 'blue';
    borderTone?: 'normal' | 'faded';
    cornerColor?: 'default' | 'blue';
    cornerTone?: 'normal' | 'faded';
    className?: string;
}

const cornerPlusBoxVariants = cva('', {
    variants: {
        variant: {
            default: 'bg-border/10',
            blue: 'bg-[#2563EB]/10 text-[#2563EB]',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const borderVariants = cva('pointer-events-none absolute inset-0 border', {
    variants: {
        border: {
            solid: '',
            dashed: '',
        },
        borderColor: {
            default: '',
            blue: '',
        },
        borderTone: {
            normal: '',
            faded: '',
        },
    },
    compoundVariants: [
        {
            border: 'solid',
            borderColor: 'default',
            borderTone: 'normal',
            class: 'border border-border',
        },
        {
            border: 'solid',
            borderColor: 'default',
            borderTone: 'faded',
            class: 'border border-border/50',
        },
        {
            border: 'solid',
            borderColor: 'blue',
            borderTone: 'normal',
            class: 'border border-[#2563EB]',
        },
        {
            border: 'solid',
            borderColor: 'blue',
            borderTone: 'faded',
            class: 'border border-[#2563EB]/50',
        },
        {
            border: 'dashed',
            borderColor: 'default',
            borderTone: 'normal',
            class: 'border border-dashed border-border',
        },
        {
            border: 'dashed',
            borderColor: 'default',
            borderTone: 'faded',
            class: 'border border-dashed border-border/50',
        },
        {
            border: 'dashed',
            borderColor: 'blue',
            borderTone: 'normal',
            class: 'border border-dashed border-[#2563EB]',
        },
        {
            border: 'dashed',
            borderColor: 'blue',
            borderTone: 'faded',
            class: 'border border-dashed border-[#2563EB]/50',
        },
    ],
    defaultVariants: {
        border: 'solid',
        borderColor: 'default',
        borderTone: 'normal',
    },
});

const cornerColorVariants = cva('', {
    variants: {
        cornerColor: {
            default: '',
            blue: '',
        },
        cornerTone: {
            normal: '',
            faded: '',
        },
    },
    compoundVariants: [
        {
            cornerTone: 'normal',
            cornerColor: 'default',
            class: 'fill-border',
        },
        {
            cornerTone: 'faded',
            cornerColor: 'default',
            class: 'fill-border/50',
        },
        {
            cornerTone: 'normal',
            cornerColor: 'blue',
            class: 'fill-[#2563EB]',
        },
        {
            cornerTone: 'faded',
            cornerColor: 'blue',
            class: 'fill-[#2563EB]/50',
        },
    ],

    defaultVariants: {
        cornerColor: 'default',
        cornerTone: 'normal',
    },
});

const CornerPlusBox: React.FC<CornerPlusBoxProps> = ({
    children,
    variant = 'default',
    border = 'solid',
    borderColor = 'default',
    borderTone = 'normal',
    cornerColor = 'default',
    cornerTone = 'normal',
    className = '',
}) => {
    const svgCorners = [
        { key: 'tl', className: 'top-[-50px] left-[-50px]' },
        { key: 'tr', className: 'top-[-50px] right-[-49px]' },
        { key: 'bl', className: 'bottom-[-49px] left-[-50px]' },
        { key: 'br', className: 'bottom-[-49px] right-[-49px]' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={cn(cornerPlusBoxVariants({ variant, className }), 'relative w-full px-2 py-4')}
        >
            <span className={cn(borderVariants({ border, borderColor, borderTone }))} />

            {children}

            {svgCorners.map(({ key, className: posClass }) => (
                <svg
                    key={key}
                    viewBox="0 0 100 100"
                    className={cn(cornerColorVariants({ cornerColor, cornerTone }), 'absolute h-[100px] w-[100px]', posClass)}
                >
                    {/* <path d="M50 0 v100 M0 50 h100" /> */}
                    <path d="M50 0 h1 v100 h-1 z M0 50 h100 v1 h-100 z" />
                </svg>
            ))}
        </motion.div>
    );
};

export default CornerPlusBox;
