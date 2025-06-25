import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import CornerPlusBox from '@/components/atoms/Box/CornerPlusBox';
import FaqAccordion from '@/components/organisms/Accordion/FaqAccordion';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const SupportPage = () => {
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
            {/* Hero Section */}
            <HeroSection isLoading={isLoading} variant="withBreadcrumb" srcImage="/images/image-18.jpg" altImage="Image Slider" className="gap-3">
                <h1 className="text-2xl font-bold md:text-4xl">Support & Docs</h1>
                <p className="text-xs md:text-base">Need help with something? Check out our most frequently asked questions</p>
            </HeroSection>

            <FaqAccordion data={faqData} isLoading={isLoading} />

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
                    <Link href={route('contact-us')}>
                        <Button effect="ringHover" variant="blue" size="sm">
                            Get in touch
                        </Button>
                    </Link>
                </CornerPlusBox>
            </div>
        </>
    );
};

export default SupportPage;
