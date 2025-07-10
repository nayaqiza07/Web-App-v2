import { Skeleton } from '@/components/ui/skeleton';

const SkeletonBlogCard = () => {
    return (
        <Skeleton className="flex h-[125px] flex-row gap-3 rounded-xl p-2 md:h-full md:flex-col">
            <Skeleton className="w-full rounded-lg md:h-[150px]" />
            <div className="flex w-full flex-col justify-between gap-6 p-1">
                <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-2/3 lg:h-5" />
                    <Skeleton className="h-4 w-1/2 lg:h-5" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="order-last h-4 w-1/4 md:order-first" />
                    <Skeleton className="h-4 w-1/3" />
                </div>
            </div>
        </Skeleton>
    );
};

export default SkeletonBlogCard;
