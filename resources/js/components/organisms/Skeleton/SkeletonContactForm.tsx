import { Skeleton } from '@/components/ui/skeleton';

const SkeletonContactForm = () => {
    return (
        <Skeleton className="flex flex-col gap-3 rounded-2xl border p-4 shadow-sm">
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
            <Skeleton className="h-10 w-30" />
        </Skeleton>
    );
};

export default SkeletonContactForm;
