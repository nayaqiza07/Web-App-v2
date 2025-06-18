import OrderPage from '@/components/templates/Order/OrderPage';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Order',
        href: '/order',
    },
];

const Order = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Order" />

            <OrderPage />
        </AppLayout>
    );
};

export default Order;
