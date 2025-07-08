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

    const { setProducts, setError } = useProductStore();

    useEffect(() => {
        try {
            setProducts(PRODUCTS);
            setError(null);
        } catch {
            setError('Gagal memuat produk');
        }
    }, [PRODUCTS, setProducts, setError]);

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
