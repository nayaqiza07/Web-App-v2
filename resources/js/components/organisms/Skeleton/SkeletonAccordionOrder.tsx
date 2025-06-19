import SkeletonCardAccordionOrder from '@/components/molecules/Skeleton/SkeletonCardAccordionOrder';
import SkeletonCartItem from '@/components/molecules/Skeleton/SkeletonCartItem';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonAccordionOrder = () => {
    return (
        <Skeleton className="flex h-fit flex-col gap-5 rounded-xl p-4">
            <Skeleton className="flex h-fit flex-col gap-5 p-4">
                <div className="flex flex-col justify-between gap-3 md:items-center lg:flex-row">
                    <Skeleton className="h-6 w-30" />
                    <div className="flex flex-col gap-3 md:flex-row">
                        <Skeleton className="h-4 w-25" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-30" />
                        <Skeleton className="size-4" />
                    </div>
                </div>
                <SkeletonCardAccordionOrder />
                <div className="grid gap-5 lg:grid-cols-2">
                    <SkeletonCartItem />
                    <SkeletonCartItem />
                </div>
            </Skeleton>

            {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} className="flex h-fit flex-col gap-5 p-4">
                    <div className="flex flex-col justify-between gap-3 md:items-center lg:flex-row">
                        <Skeleton className="h-6 w-30" />
                        <div className="flex flex-col gap-3 md:flex-row">
                            <Skeleton className="h-4 w-25" />
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-30" />
                            <Skeleton className="size-4" />
                        </div>
                    </div>
                </Skeleton>
            ))}
        </Skeleton>
    );
};

export default SkeletonAccordionOrder;
