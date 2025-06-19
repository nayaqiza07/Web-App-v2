import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { ReactNode } from 'react';
import SkeletonHeroSection from '../Skeleton/SkeletonHeroSection';

interface HeroSectionProps {
    isLoading?: boolean;
    children?: ReactNode;
    variant?: 'default' | 'withBreadcrumb';
    color?: string;
    srcImage?: string;
    altImage?: string;
}

const HeroSection = ({ isLoading = false, children, variant = 'default', color, srcImage, altImage }: HeroSectionProps) => {
    const breadcrumbs = useBreadcrumb();

    const variants = {
        default: 'h-[300px] rounded-2xl',
        withBreadcrumb: 'h-[92px] rounded-xl md:h-[120px] lg:h-[208px]',
    };

    return isLoading ? (
        <SkeletonHeroSection variant={variant} />
    ) : (
        <section className="flex flex-col gap-6">
            {variant === 'withBreadcrumb' && <Breadcrumbs breadcrumbs={breadcrumbs} />}

            <AnimatedMotion as="div" duration={1} variantName="slideDown" className={`${variants[variant]} ${color} relative overflow-hidden`}>
                {/* image */}
                <img src={srcImage} alt={altImage} className="h-full w-full object-cover" />

                {/* overlay background */}
                <div className="absolute inset-0 h-full w-full bg-black/30"></div>

                {/* text */}
                <AnimatedMotion
                    as="div"
                    delay={0.3}
                    duration={1}
                    variantName="fadeIn"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 text-center text-white"
                >
                    {children}
                </AnimatedMotion>
            </AnimatedMotion>
        </section>
    );
};

export default HeroSection;
