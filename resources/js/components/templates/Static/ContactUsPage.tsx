import ChatWithUs from '@/components/molecules/CTA/ChatWithUs';
import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import ContactForm from '@/components/organisms/Form/ContactForm';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';

const ContactUsPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const faqData = [
        {
            id: '1',
            title: 'FAQ 1',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dicta optio sunt consectetur facilis dolores necessitatibus quo quae delectus, inventore tempore qui ullam eaque libero, tenetur porro, excepturi dolore dolor vero quasi voluptatem eum! Nihil dolor aperiam optio, mollitia autem, minus fugit sunt nulla cupiditate aliquid placeat deleniti? Nesciunt, ducimus.',
        },
        {
            id: '2',
            title: 'FAQ 2',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dicta optio sunt consectetur facilis dolores necessitatibus quo quae delectus.',
        },
        {
            id: '3',
            title: 'FAQ 3',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dicta optio sunt consectetur facilis dolores necessitatibus quo quae delectus. inventore tempore qui ullam eaque libero, tenetur porro, excepturi dolore dolor vero quasi voluptatem eum! Nihil dolor aperiam optio.',
        },
        {
            id: '4',
            title: 'FAQ 4',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dicta optio sunt consectetur facilis dolores necessitatibus quo quae delectus. inventore tempore qui ullam eaque libero, tenetur porro, excepturi dolore dolor vero quasi voluptatem eum! Nihil dolor aperiam optio.',
        },
        {
            id: '5',
            title: 'FAQ 5',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dicta optio sunt consectetur facilis dolores necessitatibus quo quae delectus. inventore tempore qui ullam eaque libero, tenetur porro, excepturi dolore dolor vero quasi voluptatem eum! Nihil dolor aperiam optio. minus fugit sunt nulla cupiditate aliquid placeat deleniti? Nesciunt, ducimus.',
        },
    ];

    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]" isLoading={isLoading} className="md:gap-3">
                <h1 className="text-2xl font-bold md:text-4xl">Contact Us</h1>
                <p className="text-xs md:text-base">Feel free to contact us or even better visit us</p>
            </HeroSection>

            <div className="grid gap-3 md:grid-cols-[2fr_auto_1fr] md:gap-8">
                <ContactForm isLoading={isLoading} />
                {/* <Separator orientation="vertical" /> */}
                <Separator orientation="vertical" className="via-border bg-gradient-to-b from-transparent to-transparent" />
                <ChatWithUs isLoading={isLoading} />
            </div>
            <FaqAccordion data={faqData} isLoading={isLoading} />
        </>
    );
};

export default ContactUsPage;
