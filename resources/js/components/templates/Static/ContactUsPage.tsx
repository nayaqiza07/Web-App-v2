import ChatWithUs from '@/components/molecules/CTA/ChatWithUs';
import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import ContactForm from '@/components/organisms/Form/ContactForm';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Separator } from '@/components/ui/separator';

const ContactUsPage = () => {
    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </HeroSection>
            <div className="mb-20 grid gap-3 md:grid-cols-[2fr_auto_1fr] md:gap-8">
                <ContactForm />
                {/* <Separator orientation="vertical" /> */}
                <Separator orientation="vertical" className="via-border bg-gradient-to-b from-transparent to-transparent" />
                <ChatWithUs />
            </div>
            <FaqAccordion />
        </>
    );
};

export default ContactUsPage;
