import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCardAccordionOrder = () => {
    return (
        <Skeleton className="grid h-fit gap-5 p-4 md:grid-cols-3">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <Skeleton className="size-5" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-10" />
                        <Skeleton className="h-4 w-40" />
                    </div>
                </div>

                <div className="flex gap-5">
                    <Skeleton className="size-5" />
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-30" />
                        <Skeleton className="h-4 w-10" />
                        <Skeleton className="h-4 w-10" />
                        <Skeleton className="h-4 w-10" />
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <Skeleton className="size-5" />
                <div className="grid w-full grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-15" />
                        <Skeleton className="h-5 w-14" />
                        <Skeleton className="h-5 w-10" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-14" />
                        <Skeleton className="h-5 w-10" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex gap-5">
                        <Skeleton className="size-5" />
                        <Skeleton className="h-5 w-40" />
                    </div>
                ))}
            </div>
        </Skeleton>
    );
};

export default SkeletonCardAccordionOrder;
