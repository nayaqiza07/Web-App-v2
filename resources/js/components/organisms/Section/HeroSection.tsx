import { Breadcrumbs } from '@/components/breadcrumbs';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
    children?: ReactNode;
    variant?: 'default' | 'withBreadcrumb';
    color?: string;
    srcImage?: string;
    altImage?: string;
}

const HeroSection = ({ children, variant = 'default', color, srcImage, altImage }: HeroSectionProps) => {
    const breadcrumbs = useBreadcrumb();

    const variants = {
        default: 'h-[300px] rounded-2xl',
        withBreadcrumb: 'h-[92px] rounded-xl md:h-[120px] lg:h-[208px]',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col gap-6"
        >
            {variant === 'withBreadcrumb' && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            <div className={`${variants[variant]} ${color} relative overflow-hidden`}>
                {/* image */}
                <img src={srcImage} alt={altImage} className="h-full w-full object-cover" />

                {/* overlay background */}
                <div className="absolute inset-0 h-full w-full bg-black/30"></div>

                {/* text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 text-center text-white">{children}</div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
