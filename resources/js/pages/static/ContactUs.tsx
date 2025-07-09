import ContactUsPage from '@/components/templates/Static/ContactUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useSupportStore } from '@/stores/useSupportStore';
import { Faq } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ContactUsProps {
    FAQS: Faq[];
}
const ContactUs: React.FC<ContactUsProps> = (props) => {
    const { FAQS } = props;

    const { setFaqs } = useSupportStore();

    useEffect(() => {
        try {
            setFaqs(FAQS);
        } catch (error) {
            console.log(error);
        }
    }, [FAQS, setFaqs]);

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
