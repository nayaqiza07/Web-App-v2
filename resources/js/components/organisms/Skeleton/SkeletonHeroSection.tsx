import { Skeleton } from '@/components/ui/skeleton';
import SkeletonBreadcrumb from './SkeletonBreadcrumb';

interface SkeletonHeroSectionProps {
    variant?: 'default' | 'withBreadcrumb';
}

const SkeletonHeroSection = ({ variant = 'default' }: SkeletonHeroSectionProps) => {
    const variants = {
        default: 'h-[300px] rounded-2xl',
        withBreadcrumb: 'h-[92px] rounded-xl md:h-[120px] lg:h-[208px]',
    };

    return (
        <div className="flex flex-col gap-6">
            {variant === 'withBreadcrumb' && <SkeletonBreadcrumb />}
            <Skeleton className={`${variants[variant]}`} />
        </div>
    );
};

export default SkeletonHeroSection;
