import ProductDetailPage from '@/components/templates/Shop/ProductDetailPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { ProductData } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ProductDetailProps {
    product: ProductData;
    relatedProducts: ProductData[];
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
    const { relatedProducts, product } = props;

    const { setRelatedProducts, setSelectedProduct } = useProductStore();

    useEffect(() => {
        if (relatedProducts) setRelatedProducts(relatedProducts);
    }, [relatedProducts, setRelatedProducts]);

    useEffect(() => {
        if (product) setSelectedProduct(product);
    }, [product, setSelectedProduct]);

    return (
        <>
            <Head title={product?.name} />

            <MainLayout>
                {/* <Deferred data={['PRODUCT', 'RELATED_PRODUCTS']} fallback={<SkeletonDetailProductPage />}> */}
                <ProductDetailPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default ProductDetail;
