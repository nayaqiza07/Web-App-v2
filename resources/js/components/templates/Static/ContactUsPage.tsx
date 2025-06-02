import ContactForm from '@/components/organisms/Form/ContactForm';
import HeroSection from '@/components/organisms/Section/HeroSection';

const ContactUsPage = () => {
    return (
        <>
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]"></HeroSection>
            <ContactForm />
        </>
    );
};

export default ContactUsPage;
