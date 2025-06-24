import { Skeleton } from '@/components/ui/skeleton';

const SkeletonFaq = () => {
    return (
        <>
            <div className="mb-10 flex flex-col items-center justify-center gap-2 text-center text-xs">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-80" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="size-4" />
                </div>
                <Skeleton className="h-20 w-full" />
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="size-4" />
                </div>
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="size-4" />
                </div>
            </div>
        </>
    );
};

export default SkeletonFaq;
