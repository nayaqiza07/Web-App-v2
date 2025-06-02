import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSidebar = () => {
    return (
        <Skeleton className="flex h-[450px] w-[264px] flex-col gap-1 rounded-xl p-2">
            {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="flex h-9 items-center gap-3 px-4 py-2">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-1/4" />
                </Skeleton>
            ))}
        </Skeleton>
    );
};

export default SkeletonSidebar;
