import { Skeleton } from '@/components/ui/skeleton';

const SkeletonChatWithUs = () => {
    return (
        <div className="flex flex-col items-center gap-8 p-4 md:items-start">
            <div className="flex flex-col items-center gap-2 md:items-start">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-40" />
                <div className="flex items-center gap-3">
                    <Skeleton className="size-6" />
                    <Skeleton className="h-4 w-20" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:items-start">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-60" />
                <div className="flex items-center gap-3">
                    <Skeleton className="size-6" />
                    <Skeleton className="h-4 w-20" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:items-start">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-45" />
                <div className="flex items-center gap-3">
                    <Skeleton className="size-6" />
                    <Skeleton className="h-4 w-20" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonChatWithUs;
