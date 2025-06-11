import CartPage from '@/components/templates/Cart/CartPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const Cart = () => {
    return (
        <>
            <Head title="Cart" />

            <MainLayout>
                <CartPage />
            </MainLayout>
        </>
    );
};

export default Cart;
