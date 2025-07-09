import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Category, ProductList as ProductListType } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductListProps {
    PRODUCTS: ProductListType;
    CATEGORIES: Category[];
    CATEGORY: Category;
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS, CATEGORIES, CATEGORY } = props;

    const { setProducts, setError } = useProductStore();
    const { setCategories, setSelectedCategory } = useCategoryStore();

    useEffect(() => {
        try {
            setProducts(PRODUCTS);
            setCategories(CATEGORIES);
            setSelectedCategory(CATEGORY);
            setError(null);
        } catch {
            setError('Gagal memuat produk');
        }
    }, [PRODUCTS, CATEGORIES, CATEGORY, setProducts, setCategories, setSelectedCategory, setError]);

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
