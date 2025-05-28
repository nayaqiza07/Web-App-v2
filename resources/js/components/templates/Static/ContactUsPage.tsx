import HeroSection from '@/components/organisms/Section/HeroSection';

const ContactUsPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <HeroSection variant="withBreadcrumb" color="bg-[#10B981]">
                <div></div>
                {/* <div className="h-full rounded-xl bg-black/30"></div> */}
            </HeroSection>
        </main>
    );
};

export default ContactUsPage;
