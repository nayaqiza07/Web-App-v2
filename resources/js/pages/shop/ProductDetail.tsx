import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';

interface ProductDetailProps {
    PRODUCTS: Product;
    PRODUCT: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
    const { PRODUCTS, PRODUCT } = props;

    if (!PRODUCT) {
        return <div>Product not found.</div>;
    }
    return (
        <>
            <Head title="Product Detail" />

            <MainLayout>
                <ProductDetailPage PRODUCTS={PRODUCTS} PRODUCT={PRODUCT} />
            </MainLayout>
        </>
    );
};

export default ProductDetail;
