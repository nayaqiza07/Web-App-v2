import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonSubscription from '@/components/organisms/Skeleton/SkeletonSubscription';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonDetailBlog = () => {
    const className = [
        { id: 1, width: 'full' },
        { id: 2, width: '3/4' },
        { id: 3, width: '2/3' },
        { id: 4, width: '1/2' },
        { id: 5, width: '1/3' },
    ];

    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            {className.map(({ id, width }) => (
                <Skeleton key={id} className={`h-5 w-${width}`} />
            ))}

            <SkeletonSubscription />
        </main>
    );
};

export default SkeletonDetailBlog;
