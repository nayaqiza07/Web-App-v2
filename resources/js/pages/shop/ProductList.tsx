import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Category, Product } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductListProps {
    PRODUCTS: Product[];
    CATEGORIES: Category[];
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS, CATEGORIES } = props;

    const { setProducts, setIsLoading, setError } = useProductStore();
    const { setCategories } = useCategoryStore();

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            try {
                setProducts(PRODUCTS);
                setCategories(CATEGORIES);
                setError(null);
            } catch {
                setError('Gagal memuat produk');
            } finally {
                setIsLoading(false);
            }
        }, 2000);

        return () => clearTimeout(timeout);
    }, [PRODUCTS, CATEGORIES, setIsLoading, setProducts, setCategories, setError]);

    return (
        <>
            <Head title="Products" />
            <MainLayout>
                <ProductPage />
            </MainLayout>
        </>
    );
};

export default ProductList;
