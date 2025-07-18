import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { AddressType, type BreadcrumbItem } from '@/types';

import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import { Menu } from '@/components/atoms/Button/Menu';
import ToastSonner from '@/components/atoms/Toast/ToastSonner';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { EachUtils } from '@/lib/EachUtils';
import { MapIcon } from 'lucide-react';

interface AddressProps {
    ADDRESS: AddressType[];
    flash: {
        success?: string;
        info?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Address settings',
        href: '/settings/address',
    },
];

export default function Address(props: AddressProps) {
    const { ADDRESS, flash } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance settings" />
            {flash && flash.success && <ToastSonner variant="success" title={flash.success} />}
            {flash && flash.info && <ToastSonner variant="info" title={flash.info} />}
            {flash && flash.error && <ToastSonner variant="error" title={flash.error} />}

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Address settings" description="Add or Update your address" />

                    <div className="grid gap-3 md:grid-cols-2">
                        {/* <AddressForm /> */}
                        <EachUtils
                            emptyIcon={MapIcon}
                            emptyTitle="No address yet"
                            emptyDesc="Once you write your address, it will appear here."
                            className="col-span-2"
                            of={ADDRESS}
                            render={(_address, index) => (
                                <Card key={index} className={`gap-2 p-4 ${_address.is_active && 'border-[#2563EB]'}`}>
                                    <CardTitle className={`flex items-center justify-between`}>
                                        {_address.is_active ? <CornerPlusBadge>Default</CornerPlusBadge> : <MapIcon size={16} />}
                                        <Menu data={_address} />
                                    </CardTitle>
                                    <CardFooter className="flex h-full flex-col items-start justify-between gap-10 p-0 text-xs">
                                        <p>
                                            {_address.street}, {_address.zip}
                                        </p>
                                        <p>
                                            {_address.city}, {_address.state}, {_address.country}
                                        </p>
                                    </CardFooter>
                                </Card>
                            )}
                        />
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
