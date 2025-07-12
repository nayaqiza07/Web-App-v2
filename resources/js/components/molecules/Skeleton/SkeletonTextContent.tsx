import { Skeleton } from '@/components/ui/skeleton';

const SkeletonTextContent = () => {
    return (
        <div className="flex flex-col gap-8">
            <Skeleton className="mx-auto size-10 md:mx-0" />
            <div className="flex flex-col gap-2">
                <Skeleton className="mx-auto h-6 w-20 md:mx-0" />
                <Skeleton className="mx-auto h-4 w-full md:mx-0" />
                <Skeleton className="mx-auto h-4 w-3/4 md:mx-0" />
            </div>
        </div>
    );
};

export default SkeletonTextContent;
