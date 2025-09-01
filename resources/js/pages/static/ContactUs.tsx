import ContactUsPage from '@/components/templates/Static/ContactUsPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useContactStore } from '@/stores/useContactStore';
import { useSupportStore } from '@/stores/useSupportStore';
import { Contact, Faq } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface ContactUsProps {
    faqs: Faq[];
    contacts: Contact[];
}

const ContactUs: React.FC<ContactUsProps> = (props) => {
    const { faqs, contacts } = props;

    const { setFaqs } = useSupportStore();
    const { setContacts } = useContactStore();

    useEffect(() => {
        if (faqs) {
            setFaqs(faqs);
        }
    }, [faqs, setFaqs]);

    useEffect(() => {
        if (contacts) {
            setContacts(contacts);
        }
    }, [contacts, setContacts]);

    return (
        <>
            <Head title="Contact Us" />

            <MainLayout>
                {/* <Deferred data={['CONTACTS', 'FAQS']} fallback={<SkeletonContactUsPage />}> */}
                <ContactUsPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default ContactUs;
