// import { PageProps } from '@/types'; // pastikan ini sesuai project kamu
import { truncateText } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { HomeIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type BreadcrumbItemType = {
    title: ReactNode;
    href?: ReactNode | string;
};

export function useBreadcrumb(): BreadcrumbItemType[] {
    const { url } = usePage();

    // Contoh konversi dari path ke label
    const segments = url.split('/').filter(Boolean);

    const breadcrumbs: BreadcrumbItemType[] = [];

    if (segments.length === 0) {
        return [{ title: 'Home' }];
    }

    breadcrumbs.push({
        title: (
            <>
                <HomeIcon size={16} aria-hidden="true" />
                <span className="sr-only">Home</span>
            </>
        ),
        href: '/',
    });

    let path = '';
    const nonClickableSegments = ['category'];

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        path += '/' + segments[i];
        const isLast = i === segments.length - 1;
        const isClickable = !nonClickableSegments.includes(segment) && !isLast;

        const title = truncateText(
            segments[i].replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
            15,
        );

        breadcrumbs.push({
            title,
            href: isClickable ? path : undefined,
            // href: !isClickable && isLast ? undefined : path,
        });
    }

    return breadcrumbs;
}
