import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import SkeletonDetailProductPage from '@/components/templates/SkeletonPage/SkeletonDetailProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { ProductData, ProductList } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductDetailProps {
    PRODUCT: ProductData;
    PRODUCTS: ProductList;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
    const { PRODUCTS, PRODUCT } = props;

    const { setProducts, setSelectedProduct } = useProductStore();

    useEffect(() => {
        if (PRODUCTS) setProducts(PRODUCTS);
    }, [PRODUCTS, setProducts]);

    useEffect(() => {
        if (PRODUCT) setSelectedProduct(PRODUCT);
    }, [PRODUCT, setSelectedProduct]);

    return (
        <>
            <Head title={PRODUCT?.name} />

            <MainLayout>
                <Deferred data={'PRODUCT'} fallback={<SkeletonDetailProductPage />}>
                    <ProductDetailPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default ProductDetail;
