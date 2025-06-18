import { Skeleton } from '@/components/ui/skeleton';

const SkeletonSummaryCartCard = () => {
    return (
        <Skeleton className="hidden h-fit flex-col gap-5 p-4 md:flex">
            <Skeleton className="h-6 w-20" />

            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <Skeleton className="h-5 w-15" />
                    <Skeleton className="h-5 w-10" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-5 w-15" />
                    <Skeleton className="h-5 w-6" />
                </div>

                <Skeleton className="my-5 h-[1px] w-full" />

                <div className="flex justify-between">
                    <Skeleton className="h-5 w-15" />
                    <Skeleton className="h-5 w-20" />
                </div>

                <Skeleton className="mt-auto h-8" />
            </div>
        </Skeleton>
    );
};

export default SkeletonSummaryCartCard;
