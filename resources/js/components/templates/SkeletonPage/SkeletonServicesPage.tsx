import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonTextContent from '@/components/molecules/Skeleton/SkeletonTextContent';
import SkeletonActivity from '@/components/organisms/Skeleton/SkeletonActivity';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonServicesPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <section className="my-20 grid gap-15 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonTextContent key={index} />
                ))}
            </section>

            <SkeletonActivity />
        </main>
    );
};

export default SkeletonServicesPage;
