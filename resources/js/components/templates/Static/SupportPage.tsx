import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import CornerPlusBox from '@/components/atoms/Box/CornerPlusBox';
import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
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

            <div className="mx-auto w-4/5 md:w-5/6 lg:w-full">
                <CornerPlusBox
                    border="dashed"
                    borderColor="blue"
                    borderTone="faded"
                    cornerColor="blue"
                    cornerTone="faded"
                    className="my-10 flex h-40 flex-col justify-between bg-transparent md:h-fit md:flex-row md:items-center"
                >
                    <div className="flex flex-col gap-2">
                        <h1>Still have questions?</h1>
                        <p className="text-muted-foreground text-xs">
                            Can't find the answer you're looking for? <CornerPlusBadge>Please chat to our friendly team.</CornerPlusBadge>
                        </p>
                    </div>
                    <Link href={route('contact-us.indexOnContactUs')}>
                        <Button effect="ringHover" variant="default" size="sm">
                            Get in touch
                        </Button>
                    </Link>
                </CornerPlusBox>
            </div>
        </>
    );
};

export default SupportPage;
