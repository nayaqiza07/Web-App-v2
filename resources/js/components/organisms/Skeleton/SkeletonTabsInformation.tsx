import { Skeleton } from '@/components/ui/skeleton';

const SkeletonTabsInformation = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <Skeleton className="h-7 w-30" />
                <Skeleton className="h-7 w-20" />
                <Skeleton className="h-7 w-20" />
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
                <Skeleton className="h-50 w-full rounded-xl" />
                <Skeleton className="h-50 w-full rounded-xl" />
            </div>
        </div>
    );
};

export default SkeletonTabsInformation;
