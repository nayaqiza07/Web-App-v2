import Homepage from '@/components/templates/Home/Homepage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const Home = () => {
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
