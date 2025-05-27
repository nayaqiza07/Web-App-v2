import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const ProductList = () => {
    return (
        <>
            <Head title="Product List" />
            <MainLayout>
                <ProductPage />
            </MainLayout>
        </>
    );
};

export default ProductList;
