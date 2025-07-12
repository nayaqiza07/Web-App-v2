import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonBlogCard from '@/components/organisms/Skeleton/SkeletonBlogCard';
import SkeletonSubscription from '@/components/organisms/Skeleton/SkeletonSubscription';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonBlogPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <section className="flex w-full flex-col justify-between gap-10">
                <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonBlogCard key={index} />
                    ))}
                </div>
            </section>

            <SkeletonSubscription />
        </main>
    );
};

export default SkeletonBlogPage;
