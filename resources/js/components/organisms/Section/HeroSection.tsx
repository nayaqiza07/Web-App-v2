import { Breadcrumbs } from '@/components/breadcrumbs';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { ReactNode } from 'react';

interface HeroSectionProps {
    children: ReactNode;
    variant?: 'default' | 'withBreadcrumb';
    color?: string;
}

const HeroSection = ({ children, variant = 'default', color }: HeroSectionProps) => {
    const breadcrumbs = useBreadcrumb();

    const variants = {
        default: 'h-[300px] rounded-2xl border',
        withBreadcrumb: 'h-[92px] rounded-xl md:h-[120px] lg:h-[208px]',
    };

    return (
        <div className="flex flex-col gap-6">
            {variant === 'withBreadcrumb' && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            <div className={`${variants[variant]} ${color}`}>{children}</div>
        </div>
    );
};

export default HeroSection;
