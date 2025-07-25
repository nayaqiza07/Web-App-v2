import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCarouselImageProduct = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-5 lg:flex-col">
            <Skeleton className="mb-5 size-8 rounded-full" />
            {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="size-[72px]" />
            ))}
            <Skeleton className="mt-5 size-8 rounded-full" />
        </div>
    );
};

export default SkeletonCarouselImageProduct;
