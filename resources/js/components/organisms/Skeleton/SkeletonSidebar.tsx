import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSidebar = () => {
    return (
        <Skeleton className="flex h-[450px] w-[264px] flex-col gap-1 rounded-xl p-2">
            {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-8" />
            ))}
        </Skeleton>
    );
};

export default SkeletonSidebar;
