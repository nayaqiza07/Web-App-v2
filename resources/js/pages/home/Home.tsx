import Homepage from '@/components/templates/Home/Homepage';
import MainLayout from '@/layouts/app/MainLayout';
import { useProductStore } from '@/stores/useProductStore';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface HomeProps {
    PRODUCTS: Product[];
}

const Home: React.FC<HomeProps> = (props) => {
    const { PRODUCTS } = props;

    const { setProducts, setIsLoading, setError } = useProductStore();

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            try {
                setProducts(PRODUCTS);
                setError(null);
            } catch {
                setError('Gagal memuat produk');
            } finally {
                setIsLoading(false);
            }
        }, 2000);

        return () => clearTimeout(timeout);
    }, [PRODUCTS, setIsLoading, setProducts, setError]);

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
