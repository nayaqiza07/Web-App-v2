import AccordionCart from '@/components/organisms/Accordion/AccordionCart';
import SummaryCartCard from '@/components/organisms/Card/SummaryCartCard';
import SummaryCartDrawer from '@/components/organisms/Drawer/SummaryCartDrawer';
import HeroSection from '@/components/organisms/Section/HeroSection';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';

const CartPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                isLoading={isLoading}
                variant="withBreadcrumb"
                srcImage="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                altImage="Image Cart"
            >
                <h1 className="text-2xl font-bold md:text-4xl">Your Cart</h1>
            </HeroSection>

            <div className="grid gap-5 md:grid-cols-[2fr_auto_1fr]">
                <AccordionCart isLoading={isLoading} />
                <Separator orientation="vertical" className="via-border hidden bg-gradient-to-b from-transparent to-transparent md:block" />
                <SummaryCartCard isLoading={isLoading} />
                <SummaryCartDrawer isLoading={isLoading} />
            </div>
        </>
    );
};

export default CartPage;
