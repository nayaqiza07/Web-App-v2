import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSidebar = () => {
    return (
        <div className="flex w-[264px] flex-col gap-3">
            <Skeleton className="flex h-[450px] flex-col gap-1 rounded-xl p-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="flex h-9 items-center gap-3 px-4 py-2">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-1/4" />
                    </Skeleton>
                ))}
            </Skeleton>
            <Skeleton className="flex h-40 flex-col justify-between p-2">
                <Skeleton className="h-10 w-10"></Skeleton>
                <Skeleton className="h-5"></Skeleton>
                <div className="flex gap-3">
                    <Skeleton className="h-8 w-full"></Skeleton>
                    <Skeleton className="h-8 w-full"></Skeleton>
                </div>
            </Skeleton>
        </div>
    );
};

export default SkeletonSidebar;
