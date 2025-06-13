import { Skeleton } from '@/components/ui/skeleton';

const SkeletonBreadcrumb = () => {
    return (
        <div className="flex items-center gap-3">
            <Skeleton className="size-9" />
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-6 w-20" />
        </div>
    );
};

export default SkeletonBreadcrumb;
