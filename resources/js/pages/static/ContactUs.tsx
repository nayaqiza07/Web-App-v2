import SkeletonContactUsPage from '@/components/templates/SkeletonPage/SkeletonContactUsPage';
import ContactUsPage from '@/components/templates/Static/ContactUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useSupportStore } from '@/stores/useSupportStore';
import { Faq } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ContactUsProps {
    FAQS: Faq[];
}
const ContactUs: React.FC<ContactUsProps> = (props) => {
    const { FAQS } = props;

    const { setFaqs } = useSupportStore();

    useEffect(() => {
        if (FAQS) {
            setFaqs(FAQS);
        }
    }, [FAQS, setFaqs]);

    return (
        <>
            <Head title="Contact Us" />

            <MainLayout>
                <Deferred data={'FAQS'} fallback={<SkeletonContactUsPage />}>
                    <ContactUsPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default ContactUs;
