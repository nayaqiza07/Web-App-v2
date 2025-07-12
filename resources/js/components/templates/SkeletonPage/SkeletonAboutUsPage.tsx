import SkeletonBreadcrumb from '@/components/molecules/Skeleton/SkeletonBreadcrumb';
import SkeletonTextContent from '@/components/molecules/Skeleton/SkeletonTextContent';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonAboutUsPage = () => {
    return (
        <main className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="flex flex-col gap-6">
                <SkeletonBreadcrumb />
                <Skeleton className="h-[92px] rounded-xl md:h-[120px] lg:h-[208px]" />
            </section>

            {/* Content Section */}
            <section className="my-5 flex flex-col gap-2">
                <Skeleton className="h-4" />
                <Skeleton className="mx-auto h-4 w-3/4" />
                <Skeleton className="mx-auto h-4 w-1/2" />
                <Skeleton className="mx-auto h-4 w-1/4" />
            </section>

            <section className="my-5 flex flex-col gap-5">
                <Skeleton className="h-6 w-50" />
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
            </section>

            <section className="my-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="rounded-xl border p-3">
                        <SkeletonTextContent key={index} />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default SkeletonAboutUsPage;
