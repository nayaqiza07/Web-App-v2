import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCartItem = () => {
    return (
        <Skeleton className="flex h-fit w-full flex-col gap-5 px-3 py-2">
            <div className="flex flex-row justify-between gap-5">
                <div className="flex items-center gap-5">
                    <Skeleton className="h-[44px] w-[60px] rounded" />
                    <Skeleton className="h-4 w-15 rounded" />
                </div>
                <div className="hidden items-center justify-between gap-3 md:flex">
                    <Skeleton className="size-7 rounded-full p-0" />
                    <Skeleton className="h-8 w-20 rounded" />
                    <Skeleton className="size-7 rounded-full" />
                </div>
            </div>
            <div className="flex items-center justify-between gap-5 md:hidden">
                <Skeleton className="size-7 rounded-full p-0" />
                <Skeleton className="h-8 w-1/3 rounded" />
                <Skeleton className="size-7 rounded-full" />
            </div>
        </Skeleton>
    );
};

export default SkeletonCartItem;
