import ProductPage from '@/components/templates/Shop/ProductPage';
import SkeletonProductPage from '@/components/templates/SkeletonPage/SkeletonProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Category, ProductList as ProductListType } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductListProps {
    PRODUCTS: ProductListType;
    CATEGORIES: Category[];
    CATEGORY: Category;
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS, CATEGORIES, CATEGORY } = props;

    console.log(PRODUCTS);

    const { setProducts } = useProductStore();
    const { setCategories, setSelectedCategory } = useCategoryStore();

    useEffect(() => {
        if (PRODUCTS) {
            setProducts(PRODUCTS);
        }
    }, [PRODUCTS, setProducts]);

    useEffect(() => {
        if (CATEGORIES) {
            setCategories(CATEGORIES);
        }

        if (CATEGORY) {
            setSelectedCategory(CATEGORY);
        } else {
            setSelectedCategory(null);
        }
    }, [CATEGORIES, CATEGORY, setCategories, setSelectedCategory]);

    return (
        <>
            <Head title="Products" />
            <MainLayout>
                <Deferred data={'PRODUCTS'} fallback={<SkeletonProductPage />}>
                    <ProductPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default ProductList;
