import { Skeleton } from '@/components/ui/skeleton';

const SkeletonProductCard = () => {
    return (
        <Skeleton onClick={(e) => e.stopPropagation()} className="flex h-fit flex-col rounded-xl">
            <Skeleton className="relative h-[150px] w-full rounded-t-xl rounded-b-none">
                <Skeleton className="absolute right-3 bottom-3 size-8 rounded-full" />
            </Skeleton>

            <div className="flex flex-col gap-3 p-5">
                <Skeleton className="h-4 w-full rounded-xl" />
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/3 rounded-xl" />
                    <Skeleton className="h-4 w-1/3 rounded-xl" />
                </div>
            </div>
        </Skeleton>
    );
};

export default SkeletonProductCard;
