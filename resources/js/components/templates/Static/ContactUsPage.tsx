import ContactForm from '@/components/organisms/Form/ContactForm';
import HeroSection from '@/components/organisms/Section/HeroSection';

const ContactUsPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]"></HeroSection>
            <ContactForm />
        </main>
    );
};

export default ContactUsPage;
