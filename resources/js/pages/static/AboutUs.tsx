import AboutUsPage from '@/components/templates/Static/AboutUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const AboutUs = () => {
    return (
        <>
            <Head title="About Us" />
            <MainLayout>
                <AboutUsPage />
            </MainLayout>
        </>
    );
};

export default AboutUs;
