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

    const setProducts = useProductStore((state) => state.setProducts);
    const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
    const setError = useProductStore((state) => state.setError);
    const setIsLoading = useProductStore((state) => state.setIsLoading);

    useEffect(() => {
        try {
            setIsLoading(true);

            setProducts(PRODUCTS);
            setSelectedProduct(PRODUCT);
        } catch {
            setError('Failed to Load Data');
        } finally {
            setIsLoading(false);
        }
    }, [PRODUCT, PRODUCTS, setIsLoading, setProducts, setSelectedProduct, setError]);

    if (!PRODUCT) {
        return <div>Product not found.</div>;
    }

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
