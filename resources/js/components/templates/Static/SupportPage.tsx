import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useSupportStore } from '@/stores/useSupportStore';
import { Link } from '@inertiajs/react';

const SupportPage = () => {
    const { faqs } = useSupportStore();

    return (
        <>
            {/* Hero Section */}
            <HeroSection variant="withBreadcrumb" srcImage="/images/image-18.jpg" altImage="Image Slider" className="gap-3">
                <h1 className="text-2xl font-bold md:text-4xl">Support & Docs</h1>
                <p className="text-xs md:text-base">Need help with something? Check out our most frequently asked questions</p>
            </HeroSection>

            <FaqAccordion data={faqs} />

            <Card className="bg-primary text-primary-foreground border-none p-4 text-center shadow-none md:text-start">
                <CardContent className="items-center justify-between space-y-3 p-0 md:inline-flex md:space-y-0">
                    <div>
                        <h3 className="text-xl">Still have questions?</h3>
                        <p className="text-xs">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Link
                        href="/contact-us"
                        className={cn(buttonVariants({ variant: 'secondary' }), 'bg-[#f3f4f6] text-xs text-[#4b5563] hover:bg-[#f3f4f6]/80')}
                    >
                        Get in touch
                    </Link>
                </CardContent>
            </Card>
        </>
    );
};

export default SupportPage;
