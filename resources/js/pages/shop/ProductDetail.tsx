import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import SkeletonDetailProductPage from '@/components/templates/SkeletonPage/SkeletonDetailProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { ProductData } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductDetailProps {
    PRODUCT: ProductData;
    RELATED_PRODUCTS: ProductData[];
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
    const { RELATED_PRODUCTS, PRODUCT } = props;

    console.log(RELATED_PRODUCTS);

    const { setRelatedProducts, setSelectedProduct } = useProductStore();

    useEffect(() => {
        if (RELATED_PRODUCTS) setRelatedProducts(RELATED_PRODUCTS);
    }, [RELATED_PRODUCTS, setRelatedProducts]);

    useEffect(() => {
        if (PRODUCT) setSelectedProduct(PRODUCT);
    }, [PRODUCT, setSelectedProduct]);

    return (
        <>
            <Head title={PRODUCT?.name} />

            <MainLayout>
                <Deferred data={['PRODUCT', 'RELATED_PRODUCTS']} fallback={<SkeletonDetailProductPage />}>
                    <ProductDetailPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default ProductDetail;
