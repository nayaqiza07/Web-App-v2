import ChatWithUs from '@/components/molecules/CTA/ChatWithUs';
import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import ContactForm from '@/components/organisms/Form/ContactForm';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Separator } from '@/components/ui/separator';
import { useSupportStore } from '@/stores/useSupportStore';

const ContactUsPage = () => {
    const { faqs } = useSupportStore();

    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]" className="md:gap-3">
                <h1 className="text-2xl font-bold md:text-4xl">Contact Us</h1>
                <p className="text-xs md:text-base">Feel free to contact us or even better visit us</p>
            </HeroSection>

            <div className="grid gap-3 md:grid-cols-[2fr_auto_1fr] md:gap-8">
                <ContactForm />
                {/* <Separator orientation="vertical" /> */}
                <Separator orientation="vertical" />
                <ChatWithUs />
            </div>
            <FaqAccordion data={faqs} />
        </>
    );
};

export default ContactUsPage;
