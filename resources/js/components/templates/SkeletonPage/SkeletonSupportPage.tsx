import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonFaq from '@/components/organisms/Skeleton/SkeletonFaq';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSupportPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <SkeletonFaq />
        </main>
    );
};

export default SkeletonSupportPage;
