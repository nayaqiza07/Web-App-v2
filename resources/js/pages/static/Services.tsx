import SkeletonServicesPage from '@/components/templates/SkeletonPage/SkeletonServicesPage';
import ServicesPage from '@/components/templates/Static/ServicesPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Services = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [setIsLoading]);

    return (
        <>
            <Head title="Services" />

            <MainLayout>{isLoading ? <SkeletonServicesPage /> : <ServicesPage />}</MainLayout>
        </>
    );
};

export default Services;
