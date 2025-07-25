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
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children, variant = 'default', color, srcImage, altImage, className = '' }) => {
    const breadcrumbs = useBreadcrumb();

    const variants = {
        default: 'h-[300px] rounded-2xl',
        withBreadcrumb: 'h-[92px] rounded-xl md:h-[120px] lg:h-[208px]',
    };

    return (
        <section className="flex flex-col gap-6">
            {variant === 'withBreadcrumb' && <Breadcrumbs breadcrumbs={breadcrumbs} />}

            <motion.div
                layout
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${variants[variant]} ${color} relative overflow-hidden`}
            >
                {/* image */}
                <img src={srcImage} alt={altImage} className="h-full w-full object-cover" />

                {/* overlay background */}
                <div className="absolute inset-0 h-full w-full bg-black/50"></div>

                {/* text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className={`${className} absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center text-white md:p-10`}
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
