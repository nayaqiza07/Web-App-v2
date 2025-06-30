import { Skeleton } from '@/components/ui/skeleton';

const SkeletonContactForm = () => {
    return (
        <div className="flex flex-col gap-3 md:p-4">
            <div className="flex flex-col gap-1">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-full" />
            </div>
            <div className="flex flex-col gap-1">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-full" />
            </div>
            <div className="flex flex-col gap-1">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-full" />
            </div>
            <div className="flex flex-col gap-1">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-20 w-full" />
            </div>
            <Skeleton className="h-10 w-full" />
        </div>
    );
};

export default SkeletonContactForm;
