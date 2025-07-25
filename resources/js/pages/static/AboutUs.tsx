import SkeletonAboutUsPage from '@/components/templates/SkeletonPage/SkeletonAboutUsPage';
import AboutUsPage from '@/components/templates/Static/AboutUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [setIsLoading]);

    return (
        <>
            <Head title="About Us" />
            <MainLayout>{isLoading ? <SkeletonAboutUsPage /> : <AboutUsPage />}</MainLayout>
        </>
    );
};

export default AboutUs;
