import SkeletonContactUsPage from '@/components/templates/SkeletonPage/SkeletonContactUsPage';
import ContactUsPage from '@/components/templates/Static/ContactUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useContactStore } from '@/stores/useContactStore';
import { useSupportStore } from '@/stores/useSupportStore';
import { Contact, Faq } from '@/types';
import { Deferred, Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ContactUsProps {
    FAQS: Faq[];
    CONTACTS: Contact[];
}
const ContactUs: React.FC<ContactUsProps> = (props) => {
    const { FAQS, CONTACTS } = props;

    const { setFaqs } = useSupportStore();
    const { setContacts } = useContactStore();

    useEffect(() => {
        if (FAQS) {
            setFaqs(FAQS);
        }
    }, [FAQS, setFaqs]);

    useEffect(() => {
        if (CONTACTS) {
            setContacts(CONTACTS);
        }
    }, [CONTACTS, setContacts]);

    return (
        <>
            <Head title="Contact Us" />

            <MainLayout>
                <Deferred data={['CONTACTS', 'FAQS']} fallback={<SkeletonContactUsPage />}>
                    <ContactUsPage />
                </Deferred>
            </MainLayout>
        </>
    );
};

export default ContactUs;
