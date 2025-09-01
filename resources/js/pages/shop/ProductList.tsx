import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Category, ProductList as ProductListType } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductListProps {
    products: ProductListType;
    categories: Category[];
    category: Category;
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { products, categories, category } = props;

    const { setProducts } = useProductStore();
    const { setCategories, setSelectedCategory } = useCategoryStore();

    useEffect(() => {
        if (products) {
            setProducts(products);
        }
    }, [products, setProducts]);

    useEffect(() => {
        if (categories) {
            setCategories(categories);
        }

        if (category) {
            setSelectedCategory(category);
        } else {
            setSelectedCategory(null);
        }
    }, [categories, category, setCategories, setSelectedCategory]);

    return (
        <>
            <Head title="Products" />
            <MainLayout>
                {/* <Deferred data={['PRODUCTS', 'CATEGORIES']} fallback={<SkeletonProductPage />}> */}
                <ProductPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default ProductList;
