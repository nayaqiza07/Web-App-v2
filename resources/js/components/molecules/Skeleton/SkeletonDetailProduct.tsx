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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-10 w-25" />
                    <Skeleton className="h-4 w-40" />
                </div>
                <Skeleton className="h-5 w-25" />
            </div>
            <div className="flex flex-col gap-1">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-5 w-1/2" />
            </div>
            <Skeleton className="h-10" />
        </div>
    );
};

export default SkeletonDetailProduct;
