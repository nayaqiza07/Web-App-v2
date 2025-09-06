import OrderPage from '@/components/templates/Order/OrderPage';
import AppLayout from '@/layouts/app-layout';
import { useOrderStore } from '@/stores/userOrderStore';
import { OrderDataType, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Order',
        href: route('order.index'),
    },
];

interface OrderPageProps {
    orders: OrderDataType[];
}

const Order: React.FC<OrderPageProps> = (props) => {
    const { orders } = props;
    const { setOrders } = useOrderStore();

    useEffect(() => {
        if (orders) {
            setOrders(orders);
        }
    }, [orders, setOrders]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Order" />

            <OrderPage />
        </AppLayout>
    );
};

export default Order;
