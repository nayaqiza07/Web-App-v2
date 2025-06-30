import ProductPage from '@/components/templates/Shop/ProductPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';

interface ProductListProps {
    PRODUCTS: Product[];
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { PRODUCTS } = props;

    return (
        <>
            <Head title="Product List" />
            <MainLayout>
                <ProductPage PRODUCTS={PRODUCTS} />
            </MainLayout>
        </>
    );
};

export default ProductList;
