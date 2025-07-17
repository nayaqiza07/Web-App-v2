import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { AddressType, type BreadcrumbItem } from '@/types';

import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import { Menu } from '@/components/atoms/Button/Menu';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import AddressForm from '@/components/organisms/Form/AddressForm';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { MapIcon } from 'lucide-react';
import { useState } from 'react';

interface AddressProps {
    ADDRESS: AddressType[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Address settings',
        href: '/settings/address',
    },
];

export default function Address(props: AddressProps) {
    const { ADDRESS } = props;
    const [defaultAddressIndex, setDefaultAddressIndex] = useState<number | null>(0);

    console.log(ADDRESS);

    const [addressData, setAddressData] = useState<AddressType[]>([
        // {
        //     id: '91233',
        //     country: 'Indonesia',
        //     state: 'Jawa Tengah',
        //     city: 'Jepara',
        //     street: 'Jalan Sultan Hadlirin, Desa Langon RT.12/RW.05, Kecamatan Tahunan, Kabupaten Jepara',
        //     zip: '59425',
        // },
        // {
        //     id: '18988',
        //     country: 'Indonesia',
        //     state: 'Jawa Tengah',
        //     city: 'Jepara',
        //     street: 'Jl. Langon, Tahunan',
        //     zip: '55566',
        // },
    ]);

    const handleAddAddress = (newAddress: AddressType) => {
        setAddressData((prev) => [...prev, newAddress]);
    };

    const handleDelete = (id: string) => {
        setAddressData((prev) => prev.filter((item) => item.id !== id));
        console.log('Data dengan id ', id, ' berhasil di hapus');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Address settings" description="Add or Update your address" />

                    <div className="grid gap-3 md:grid-cols-2">
                        <AddressForm addressData={addressData} onAddAddress={handleAddAddress} />
                        {ADDRESS.length === 0 ? (
                            <EmptyState
                                title="No address yet"
                                desc="Once you write your address, it will appear here."
                                icon={<MapIcon />}
                                className="col-span-2"
                            />
                        ) : (
                            ADDRESS.map((_address, index) => {
                                const isDefault = defaultAddressIndex === index;

                                return (
                                    <Card
                                        key={index}
                                        onDoubleClick={() => setDefaultAddressIndex(index)}
                                        className={`gap-2 p-4 ${isDefault && 'border-[#2563EB]'}`}
                                    >
                                        <CardTitle className={`flex items-center justify-between`}>
                                            {isDefault ? <CornerPlusBadge>Default</CornerPlusBadge> : <MapIcon size={16} />}
                                            <Menu
                                                onSetDefault={() => setDefaultAddressIndex(index)}
                                                isDefault={isDefault}
                                                onDelete={() => handleDelete(_address.id ?? '')}
                                            />
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
                                );
                            })
                        )}
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
