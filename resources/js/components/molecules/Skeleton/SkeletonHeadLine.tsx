import { Skeleton } from '@/components/ui/skeleton';

const SkeletonHeadLine = () => {
    return (
        <div className="flex justify-between">
            <div className="flex w-full items-center gap-4">
                <Skeleton className="size-6" />
                <Skeleton className="h-6 w-1/4" />
            </div>
            <Skeleton className="size-9" />
        </div>
    );
};

export default SkeletonHeadLine;
