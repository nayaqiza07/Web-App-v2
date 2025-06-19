import { Skeleton } from '@/components/ui/skeleton';

const SkeletonDetailProduct = () => {
    return (
        <div className="flex w-full flex-col justify-between gap-5 lg:w-2/3">
            <Skeleton className="h-10 w-60" />
            <div className="flex items-end gap-2">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="h-4 w-30" />
            </div>
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-40" />
            <div className="flex items-center justify-between">
                <Skeleton className="h-10 w-25" />
                <Skeleton className="h-4 w-40" />
            </div>
            <Skeleton className="h-20" />
            <Skeleton className="h-10" />
        </div>
    );
};

export default SkeletonDetailProduct;
