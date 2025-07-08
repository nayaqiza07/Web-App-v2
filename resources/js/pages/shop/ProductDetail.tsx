import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductDetailProps {
    PRODUCT: Product;
    PRODUCTS: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
    const { PRODUCTS, PRODUCT } = props;

    const { setProducts, setSelectedProduct, setError } = useProductStore();

    useEffect(() => {
        try {
            setProducts(PRODUCTS);
            setSelectedProduct(PRODUCT);
            setError(null);
        } catch {
            setError('Failed Load Data');
        }
    }, [PRODUCTS, PRODUCT, setProducts, setSelectedProduct, setError]);

    return (
        <>
            <Head title={PRODUCT.name} />

            <MainLayout>
                <ProductDetailPage />
            </MainLayout>
        </>
    );
};

export default ProductDetail;
