import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import { Menu } from '@/components/atoms/Button/Menu';
import AddressForm from '@/components/organisms/Form/AddressForm';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { MapIcon } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Address settings',
        href: '/settings/address',
    },
];

const addressData = [
    {
        region: 'Indonesia',
        state: 'Jawa Tengah',
        city: 'Jepara',
        address: 'Jalan Sultan Hadlirin, Desa Langon RT.12/RW.05, Kecamatan Tahunan, Kabupaten Jepara',
        zip_code: '59425',
    },
    {
        region: 'Indonesia',
        state: 'Jawa Tengah',
        city: 'Jepara',
        address: 'Jl. Langon, Tahunan',
        zip_code: '55566',
    },
];

export default function Address() {
    const [defaultAddressIndex, setDefaultAddressIndex] = useState<number | null>(0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Address settings" description="Add or Update your address" />

                    <div className="grid gap-3 md:grid-cols-2">
                        <AddressForm />
                        {addressData.map((data, index) => {
                            const isDefault = defaultAddressIndex === index;

                            return (
                                <Card
                                    key={index}
                                    onDoubleClick={() => setDefaultAddressIndex(index)}
                                    className={`gap-2 p-4 ${isDefault && 'border-[#2563EB]'}`}
                                >
                                    <CardTitle className={`flex items-center justify-between`}>
                                        {isDefault ? <CornerPlusBadge>Default</CornerPlusBadge> : <MapIcon size={16} />}
                                        <Menu onSetDefault={() => setDefaultAddressIndex(index)} isDefault={isDefault} />
                                    </CardTitle>
                                    <CardFooter className="flex h-full flex-col items-start justify-between gap-10 p-0 text-xs">
                                        <p>
                                            {data.address}, {data.zip_code}
                                        </p>
                                        <p>
                                            {data.city}, {data.state}, {data.region}
                                        </p>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
