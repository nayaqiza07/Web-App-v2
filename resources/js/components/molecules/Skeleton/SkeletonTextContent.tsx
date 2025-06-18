import { Skeleton } from '@/components/ui/skeleton';

const SkeletonTextContent = () => {
    return (
        <div className="flex flex-col gap-8">
            <Skeleton className="size-10" />
            <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-30" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-60" />
                <Skeleton className="h-4 w-25" />
            </div>
        </div>
    );
};

export default SkeletonTextContent;
