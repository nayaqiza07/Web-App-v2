import SupportPage from '@/components/templates/Static/SupportPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useSupportStore } from '@/stores/useSupportStore';
import { Faq } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface SupportProps {
    FAQS: Faq[];
}

const Support: React.FC<SupportProps> = (props) => {
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
            <Head title="Support" />

            <MainLayout>
                <SupportPage />
            </MainLayout>
        </>
    );
};

export default Support;
