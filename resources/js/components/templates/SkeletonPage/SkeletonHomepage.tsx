import SkeletonHeadLine from '@/components/molecules/Skeleton/SkeletonHeadLine';
import SkeletonActivity from '@/components/organisms/Skeleton/SkeletonActivity';
import SkeletonBlogCard from '@/components/organisms/Skeleton/SkeletonBlogCard';
import SkeletonCategoryCard from '@/components/organisms/Skeleton/SkeletonCategoryCard';
import SkeletonProductCard from '@/components/organisms/Skeleton/SkeletonProductCard';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonHomepage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <Skeleton className="h-[300px] rounded-2xl" />

            {/* Content Section */}
            <section className="flex flex-col gap-6">
                <SkeletonHeadLine />
                <div className="flex gap-4 overflow-hidden pr-4 md:pr-12 lg:pr-16">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 basis-1/2 md:basis-1/4 lg:basis-1/5">
                            <SkeletonProductCard />
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <SkeletonHeadLine />
                <div className="flex gap-4 overflow-hidden pr-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 basis-full md:basis-1/2">
                            <SkeletonCategoryCard />
                        </div>
                    ))}
                </div>
            </section>

            <SkeletonActivity />

            <section className="flex flex-col gap-6">
                <SkeletonHeadLine />
                <div className="flex gap-4 overflow-hidden pr-4 md:pr-12 lg:pr-16">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 basis-1/2 md:basis-1/4 lg:basis-1/5">
                            <SkeletonBlogCard />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SkeletonHomepage;
