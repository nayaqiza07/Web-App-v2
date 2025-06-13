import { Skeleton } from '@/components/ui/skeleton';

const SkeletonContentProductDetail = () => {
    return (
        <div className="flex w-2/3 flex-col gap-6">
            <Skeleton className="h-8 w-full" />
            <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-10 w-full" />
        </div>
    );
};

export default SkeletonContentProductDetail;
