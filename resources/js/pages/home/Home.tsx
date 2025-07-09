import Homepage from '@/components/templates/Home/Homepage';
import MainLayout from '@/layouts/app/MainLayout';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { useProductStore } from '@/stores/useProductStore';
import { Category, ProductList } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface HomeProps {
    PRODUCTS: ProductList;
    CATEGORIES: Category[];
}

const Home: React.FC<HomeProps> = (props) => {
    const { PRODUCTS, CATEGORIES } = props;

    const { setProducts, setError } = useProductStore();
    const { setCategories } = useCategoryStore();

    useEffect(() => {
        try {
            setProducts(PRODUCTS);
            setCategories(CATEGORIES);
            setError(null);
        } catch {
            setError('Gagal memuat produk');
        }
    }, [PRODUCTS, CATEGORIES, setProducts, setCategories, setError]);

    return (
        <>
            <Head title="Home" />
            <MainLayout>
                <Homepage />
            </MainLayout>
        </>
    );
};

export default Home;
