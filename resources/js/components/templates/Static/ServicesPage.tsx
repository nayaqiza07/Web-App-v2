import HeroSection from '@/components/organisms/Section/HeroSection';

const ServicesPage = () => {
    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 p-5">
            <HeroSection variant="withBreadcrumb" color="bg-[#E3B4BA]">
                <div className="flex h-full items-center justify-center">
                    <h1>Services</h1>
                </div>
                {/* <div className="h-full rounded-xl bg-black/30"></div> */}
            </HeroSection>
        </main>
    );
};

export default ServicesPage;
