import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSubscription = () => {
    return (
        <div className="flex h-[168px] flex-col items-center justify-center gap-4">
            <Skeleton className="h-10 w-96" />
            <Skeleton className="relative h-10 w-80 rounded-full">
                <Skeleton className="absolute top-1/2 right-2 h-6 w-15 -translate-y-1/2 rounded-full" />
            </Skeleton>
        </div>
    );
};

export default SkeletonSubscription;
