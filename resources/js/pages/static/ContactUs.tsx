import ContactUsPage from '@/components/templates/Static/ContactUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { Head } from '@inertiajs/react';

const ContactUs = () => {
    return (
        <>
            <Head title="Contact Us" />

            <MainLayout>
                <ContactUsPage />
            </MainLayout>
        </>
    );
};

export default ContactUs;
