import SupportPage from '@/components/templates/Static/SupportPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const Support = () => {
    return (
        <>
            <Head title="Support" />

            <MainLayout>
                <SupportPage />
            </MainLayout>
        </>
    );
};

export default Support;
