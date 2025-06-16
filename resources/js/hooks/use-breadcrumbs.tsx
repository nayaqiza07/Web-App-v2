// import { PageProps } from '@/types'; // pastikan ini sesuai project kamu
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { House } from 'lucide-react';
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
            <Button size="icon" className="size-7">
                <House />
            </Button>
        ),
        href: '/home',
    });

    let path = '';
    for (let i = 0; i < segments.length; i++) {
        path += '/' + segments[i];
        const isLast = i === segments.length - 1;
        const title = segments[i].replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

        breadcrumbs.push({
            title,
            href: isLast ? undefined : path,
        });
    }

    return breadcrumbs;
}
