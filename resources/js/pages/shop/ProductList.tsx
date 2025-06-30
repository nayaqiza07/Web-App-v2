import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductListProps {
    PRODUCTS: Product[];
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS } = props;

    const setProducts = useProductStore((state) => state.setProducts);
    const setIsLoading = useProductStore((state) => state.setIsLoading);
    const setError = useProductStore((state) => state.setError);

    useEffect(() => {
        try {
            setIsLoading(true);
            setError(null);

            setProducts(PRODUCTS);
        } catch {
            setError('Failed to Load Products');
        } finally {
            setIsLoading(false);
        }
    }, [PRODUCTS, setProducts, setIsLoading, setError]);

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
