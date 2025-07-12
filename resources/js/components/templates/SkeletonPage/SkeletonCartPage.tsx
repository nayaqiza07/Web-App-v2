import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonAccordionCart from '@/components/organisms/Skeleton/SkeletonAccordionCart';
import SkeletonSummaryCartCard from '@/components/organisms/Skeleton/SkeletonSummaryCartCard';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCartPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <section className="grid gap-5 md:grid-cols-[2fr_auto_1fr]">
                <SkeletonAccordionCart />
                <Separator orientation="vertical" className="via-border hidden bg-gradient-to-b from-transparent to-transparent md:block" />
                <SkeletonSummaryCartCard />
            </section>
        </main>
    );
};

export default SkeletonCartPage;
