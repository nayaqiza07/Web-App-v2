import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSidebar = () => {
    return (
        <div className="relative hidden w-[264px] flex-col gap-3 md:flex">
            <Skeleton className="flex h-[450px] flex-col gap-2 rounded-xl px-2">
                <div className="py-4">
                    <Skeleton className="h-5" />
                </div>
                <Skeleton className="flex h-9 items-center gap-3 px-2 py-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/4" />
                </Skeleton>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex h-9 items-center gap-3 px-2 py-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>
                ))}
            </Skeleton>
            <Skeleton className="flex h-40 flex-col justify-between p-2">
                <Skeleton className="h-5 w-10"></Skeleton>
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
