import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCartItem = () => {
    return (
        <Skeleton className="flex h-fit w-full flex-col gap-5 px-3 py-2">
            <div className="flex flex-row justify-between gap-5">
                {/* <div className="flex items-start gap-5"> */}
                <Skeleton className="h-[44px] w-[60px] rounded" />
                <div className="flex flex-col gap-1">
                    <Skeleton className="h-3 w-40 rounded" />
                    <Skeleton className="h-3 w-15 rounded" />
                    <Skeleton className="h-3 w-15 rounded" />
                </div>
                <Skeleton className="size-6 rounded" />
                {/* </div> */}
            </div>
            <div className="flex items-center justify-between gap-5">
                <Skeleton className="h-8 w-1/3 rounded" />
                <Skeleton className="h-7 w-1/2 rounded" />
            </div>
        </Skeleton>
    );
};

export default SkeletonCartItem;
