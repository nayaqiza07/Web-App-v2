import { Breadcrumbs } from '@/components/breadcrumbs';
import { useBreadcrumb } from '@/hooks/use-breadcrumbs';
import { ReactNode } from 'react';

interface HeroSectionProps {
    children: ReactNode;
    variant?: 'default' | 'withBreadcrumb';
}

const HeroSection = ({ children, variant = 'default' }: HeroSectionProps) => {
    const breadcrumbs = useBreadcrumb();

    const variants = {
        default: 'h-[300px] rounded-2xl border',
        withBreadcrumb: 'h-[92px] rounded-xl bg-[#9333EA] md:h-[120px] lg:h-[208px]',
    };

    return (
        <div className="flex flex-col gap-6">
            {variant === 'withBreadcrumb' && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            <div className={variants[variant]}>{children}</div>
        </div>
    );
};

export default HeroSection;
