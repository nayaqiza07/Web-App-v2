import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const ProductDetail = () => {
    return (
        <>
            <Head title="Product Detail" />

            <MainLayout>
                <ProductDetailPage />
            </MainLayout>
        </>
    );
};

export default ProductDetail;
