import { Skeleton } from '@/components/ui/skeleton';

const SkeletonActivity = () => {
    return (
        <Skeleton className="flex w-full flex-col justify-between gap-6 rounded-2xl p-2 md:h-[300px] md:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-6 py-7">
                <Skeleton className="h-15 w-2/3" />
                <Skeleton className="h-10 w-1/4" />
            </div>
            <Skeleton className="order-first h-[200px] w-full rounded-xl md:order-last md:h-full" />
        </Skeleton>
    );
};

export default SkeletonActivity;
