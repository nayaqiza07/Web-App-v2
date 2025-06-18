import SkeletonCartItem from '@/components/molecules/Skeleton/SkeletonCartItem';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonAccordionCart = () => {
    return (
        <div className="flex flex-col gap-5">
            {/* Bag */}
            <Skeleton className="flex h-fit flex-col gap-5 p-4">
                <div className="flex justify-between">
                    <Skeleton className="h-5 w-30" />
                    <div className="flex gap-4">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-20" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <SkeletonCartItem />
                    <SkeletonCartItem />
                    <SkeletonCartItem />
                </div>
            </Skeleton>

            {/* Profile */}
            <Skeleton className="flex h-fit flex-col gap-5 p-4">
                <Skeleton className="h-5 w-40" />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-8" />
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                    </div>
                </div>
            </Skeleton>

            {/* Delivery */}
            <Skeleton className="flex h-fit flex-col gap-5 p-4">
                <Skeleton className="h-5 w-40" />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-8" />
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-8" />
                        </div>
                    </div>
                </div>
            </Skeleton>
        </div>
    );
};

export default SkeletonAccordionCart;
