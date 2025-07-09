import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const badgeLabel = cva('rounded-tl-3xl rounded-tr-4xl rounded-br-4xl px-[8px] py-[4px]', {
    variants: {
        variant: {
            discount: 'bg-destructive',
            // discount: 'bg-[#f94d63]',
            hot: 'bg-red-600',
            new: 'bg-[#2563EB]',
            exclusive: 'bg-purple-600',
        },
    },
    defaultVariants: {
        variant: 'discount',
    },
});

const badgeDot = cva('size-[5px] rounded-bl-full', {
    variants: {
        variant: {
            // discount: 'bg-[#b31d40]',
            discount: 'bg-[#8e1a29]',
            hot: 'bg-red-800',
            new: 'bg-[#1e3a8a]',
            exclusive: 'bg-purple-800',
        },
    },
    defaultVariants: {
        variant: 'discount',
    },
});

interface CustomBadgeProps {
    // top?: string;
    label?: string | number;
    variant?: 'discount' | 'hot' | 'new' | 'exclusive';
    className?: string;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ label = '50%', variant = 'discount', className = '' }) => {
    return (
        <div className={cn(`flex h-fit w-fit flex-col text-xs font-bold text-white uppercase`, className)}>
            <span className={badgeLabel({ variant })}>{label}</span>
            <span className={badgeDot({ variant })}></span>
        </div>
    );
};

export default CustomBadge;
