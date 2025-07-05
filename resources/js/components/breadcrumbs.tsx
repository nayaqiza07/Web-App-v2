import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react';
import AnimatedMotion from './atoms/Animated/AnimatedMotion';
import SkeletonBreadcrumb from './molecules/Skeleton/SkeletonBreadcrumb';

export function Breadcrumbs({ isLoading = false, breadcrumbs }: { isLoading?: boolean; breadcrumbs: BreadcrumbItemType[] }) {
    return isLoading ? (
        <SkeletonBreadcrumb />
    ) : (
        <AnimatedMotion as="div" delay={0.3} duration={0.5} animate="visible" variantName="slideRight">
            {breadcrumbs.length > 0 && (
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbs.map((item, index) => {
                            const isLast = index === breadcrumbs.length - 1;

                            return (
                                <Fragment key={index}>
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage className="font-bold">{item.title}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink asChild>
                                                <Link href={item.href}>{item.title}</Link>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {!isLast && <BreadcrumbSeparator />}
                                </Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            )}
        </AnimatedMotion>
    );
}
