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
    CATEGORY: Category;
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS, CATEGORIES, CATEGORY } = props;

    const { setProducts, setIsLoading, setError } = useProductStore();
    const { setCategories, setSelectedCategory } = useCategoryStore();

    useEffect(() => {
        const loading = !PRODUCTS || !CATEGORIES;
        setIsLoading(loading);

        if (!loading) {
            try {
                setProducts(PRODUCTS);
                setCategories(CATEGORIES);
                setSelectedCategory(CATEGORY);
                setError(null);
            } catch {
                setError('Gagal memuat produk');
            }
        }
    }, [PRODUCTS, CATEGORIES, CATEGORY, setIsLoading, setProducts, setCategories, setSelectedCategory, setError]);

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
