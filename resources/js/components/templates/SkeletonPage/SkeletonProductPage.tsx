import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonProductCard from '@/components/organisms/Skeleton/SkeletonProductCard';
import SkeletonSidebar from '@/components/organisms/Skeleton/SkeletonSidebar';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonProductPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            <Skeleton className="h-10 md:hidden" />

            {/* Content Section */}
            <section className="flex gap-5">
                {/* Sidebar Product Start */}
                <SkeletonSidebar />
                {/* Sidebar Product End */}

                {/* Product List */}
                <div className="flex w-full flex-col justify-between gap-10">
                    <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <SkeletonProductCard key={index} />
                        ))}
                    </div>
                    {/* Product List */}
                </div>
            </section>
        </main>
    );
};

export default SkeletonProductPage;
