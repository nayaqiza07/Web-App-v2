import ServicesPage from '@/components/templates/Static/ServicesPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const Services = () => {
    return (
        <>
            <Head title="Services" />

            <MainLayout>
                <ServicesPage />
            </MainLayout>
        </>
    );
};

export default Services;
