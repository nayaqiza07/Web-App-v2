import HeroSection from '@/components/organisms/Section/HeroSection';

const AboutUsPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <HeroSection variant="withBreadcrumb" color="bg-[#BECBC3]">
                <div className="flex h-full items-center justify-center">
                    <h1>About Us</h1>
                </div>
                {/* <div className="h-full rounded-xl bg-black/30"></div> */}
            </HeroSection>
        </main>
    );
};

export default AboutUsPage;
