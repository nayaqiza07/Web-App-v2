import SupportPage from '@/components/templates/Static/SupportPage';
import MainLayout from '@/layouts/app/MainLayout';
import { useSupportStore } from '@/stores/useSupportStore';
import { Faq } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

interface SupportProps {
    faqs: Faq[];
}

const Support: React.FC<SupportProps> = (props) => {
    const { faqs } = props;

    const { setFaqs } = useSupportStore();

    useEffect(() => {
        if (faqs) {
            setFaqs(faqs);
        }
    }, [faqs, setFaqs]);

    return (
        <>
            <Head title="Support" />

            <MainLayout>
                {/* <Deferred data={'FAQS'} fallback={<SkeletonContactUsPage />}> */}
                <SupportPage />
                {/* </Deferred> */}
            </MainLayout>
        </>
    );
};

export default Support;
