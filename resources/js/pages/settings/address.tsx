import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { AddressType, type BreadcrumbItem } from '@/types';

import AddressCard from '@/components/organisms/Card/AddressCard';
import AddressForm from '@/components/organisms/Form/AddressForm';
import { useFlashToast } from '@/hooks/useFlashToast';
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
    const { ADDRESS } = props;

    useFlashToast();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Address" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Address settings" description="Add or Update your address" />

                    <div className="grid gap-3 md:grid-cols-2">
                        <AddressForm isFor="create" />
                        <EachUtils
                            emptyIcon={MapIcon}
                            emptyTitle="No address yet"
                            emptyDesc="Once you write your address, it will appear here."
                            className="col-span-2"
                            of={ADDRESS}
                            render={(_address) => <AddressCard key={_address.id} data={_address} />}
                        />
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
